import HashMap "mo:base/HashMap";
import Principal "mo:base/Principal";
import Iter "mo:base/Iter";
import Array "mo:base/Array";
import Text "mo:base/Text";
import Nat "mo:base/Nat";
import Hash "mo:base/Hash";

// Main actor for DAppStore - a decentralized marketplace for dApps
actor DAppStore {
    
    // Type definition for a dApp entry
    public type DApp = {
        id: Nat;
        name: Text;
        description: Text;
        link: Text;
        developer: Principal;
    };
    
    // Stable variable to maintain ID counter across upgrades
    stable var nextId: Nat = 0;
    
    // Stable entries for HashMap persistence across upgrades
    stable var dappEntries: [(Nat, DApp)] = [];
    
    // HashMap to store dApps with Nat keys
    let dapps = HashMap.HashMap<Nat, DApp>(0, Nat.equal, Hash.hash);
    
    // System functions for upgrade persistence
    system func preupgrade() {
        dappEntries := Iter.toArray(dapps.entries());
    };
    
    system func postupgrade() {
        dappEntries := [];
    };
    
    // Initialize HashMap from stable storage
    for ((id, dapp) in dappEntries.vals()) {
        dapps.put(id, dapp);
    };
    
    // Helper function to check if a dApp name already exists
    private func nameExists(name: Text): Bool {
        for (dapp in dapps.vals()) {
            if (Text.equal(dapp.name, name)) {
                return true;
            };
        };
        false
    };
    
    /**
     * Submit a new dApp to the store
     * @param name - Name of the dApp
     * @param description - Description of the dApp
     * @param link - Link to the dApp
     * @returns Success or error message
     */
    public shared(msg) func submitDapp(name: Text, description: Text, link: Text): async Text {
        // Check if name already exists
        if (nameExists(name)) {
            return "Name already taken";
        };
        
        // Create new dApp with auto-generated ID and caller as developer
        let newDapp: DApp = {
            id = nextId;
            name = name;
            description = description;
            link = link;
            developer = msg.caller;
        };
        
        // Store the dApp in HashMap
        dapps.put(nextId, newDapp);
        
        // Increment ID counter for next submission
        nextId += 1;
        
        "DApp submitted successfully"
    };
    
    /**
     * Get all dApps in the store
     * @returns Array of all dApps
     */
    public shared func getAllDapps(): async [DApp] {
        // Convert HashMap values to Array
        Iter.toArray(dapps.vals())
    };
    
    /**
     * Get a specific dApp by its ID
     * @param id - The unique ID of the dApp
     * @returns Optional DApp (null if not found)
     */
    public shared func getDappById(id: Nat): async ?DApp {
        // Fetch dApp from HashMap by ID
        dapps.get(id)
    };
    
    /**
     * Delete a dApp (only by the developer who submitted it)
     * @param id - The unique ID of the dApp to delete
     * @returns Success or unauthorized message
     */
    public shared(msg) func deleteDapp(id: Nat): async Text {
        // Check if dApp exists
        switch (dapps.get(id)) {
            case (null) {
                "DApp not found"
            };
            case (?dapp) {
                // Check if caller is the developer who submitted the dApp
                if (Principal.equal(msg.caller, dapp.developer)) {
                    // Remove dApp from HashMap
                    ignore dapps.remove(id);
                    "DApp deleted successfully"
                } else {
                    "Unauthorized"
                }
            };
        }
    };
    
    /**
     * Get total number of dApps in the store
     * @returns Total count of dApps
     */
    public shared func getTotalDapps(): async Nat {
        dapps.size()
    };
    
    /**
     * Get dApps by a specific developer
     * @param developer - Principal of the developer
     * @returns Array of dApps by the specified developer
     */
    public shared func getDappsByDeveloper(developer: Principal): async [DApp] {
        let developerDapps = Array.filter<DApp>(
            Iter.toArray(dapps.vals()),
            func(dapp: DApp): Bool {
                Principal.equal(dapp.developer, developer)
            }
        );
        developerDapps
    };
}
