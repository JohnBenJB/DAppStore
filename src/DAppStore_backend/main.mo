import HashMap "mo:base/HashMap";
import Principal "mo:base/Principal";
import Iter "mo:base/Iter";
import Array "mo:base/Array";
import Text "mo:base/Text";
import Nat "mo:base/Nat";
import Hash "mo:base/Hash";

// Main actor for DAppStore - a decentralized marketplace for dApps
actor DAppStore {

    // ------------------------------------------------------------------------
    // Type Definitions
    // ------------------------------------------------------------------------

    /** 
     * Type definition for a DApp entry
     */
    public type DApp = {
        id: Nat;                        // Unique identifier for the DApp
        name: Text;                      // Name of the DApp
        category: Text;                  // Category (e.g., Finance, Social)
        shortDescription: Text;          // Short description for listings
        detailedDescription: Text;       // Full description of the DApp
        canisterId: Text;                // ICP Canister ID of the DApp
        logoUrl: Text;                   // URL to the DApp's logo (store on IPFS or other decentralized storage)
        // screenshots: [Text];          // Optional: Array of screenshot URLs (commented out for now)
        developer: Principal;            // Principal of the developer
    };

    // ------------------------------------------------------------------------
    // Stable Variables (persist across upgrades)
    // ------------------------------------------------------------------------

    /** Persistent storage for all DApps as (id, DApp) tuples */
    stable var dappsStable: [(Nat, DApp)] = [];

    /** Stable counter to generate unique IDs */
    stable var nextDappId: Nat = 0;

    // ------------------------------------------------------------------------
    // Runtime in-memory storage
    // ------------------------------------------------------------------------

    /** HashMap to store DApps in-memory for fast access */
    var dapps: HashMap.HashMap<Nat, DApp> = HashMap.HashMap(10, Nat.equal, Hash.hash);

    // ------------------------------------------------------------------------
    // Upgrade hooks
    // ------------------------------------------------------------------------

    /**
     * Pre-upgrade: persist current DApps to stable storage
     */
    system func preupgrade() {
        dappsStable := Iter.toArray(dapps.entries());
    };

    /**
     * Post-upgrade: restore DApps from stable storage into HashMap
     */
    system func postupgrade() {
        dapps := HashMap.fromIter<Nat, DApp>(dappsStable.vals(), 10, Nat.equal, Hash.hash);
        dappsStable := [];
    };

    // ------------------------------------------------------------------------
    // Helper functions
    // ------------------------------------------------------------------------

    /** 
     * Generate a new unique DApp ID
     */
    private func getNewId(): Nat {
        let id = nextDappId;
        nextDappId += 1;
        return id;
    };

    /**
     * Check if a DApp with the given name already exists
     */
    private func nameExists(name: Text): Bool {
        for (dapp in dapps.vals()) {
            if (Text.equal(dapp.name, name)) {
                return true;
            };
        };
        false
    };

    /**
     * Private helper to filter DApps by a specific developer
     */
    private func filterDappsByDeveloper(developer: Principal): [DApp] {
        Array.filter<DApp>(
            Iter.toArray(dapps.vals()),
            func(dapp: DApp): Bool {
                Principal.equal(dapp.developer, developer)
            }
        )
    };


    // ------------------------------------------------------------------------
    // Public Functions
    // ------------------------------------------------------------------------

    /**
     * Submit a new DApp to the store
     * @param name - Name of the DApp
     * @param category - Category of the DApp
     * @param shortDescription - Short description
     * @param detailedDescription - Full description
     * @param canisterId - Canister ID of the DApp
     * @param logoUrl - URL to the logo (stored on IPFS or similar)
     * @returns Success or error message
     */
    public shared(msg) func submitDapp(
        name: Text,
        category: Text,
        shortDescription: Text,
        detailedDescription: Text,
        canisterId: Text,
        logoUrl: Text
        // screenshots: [Text]       // Optional screenshots field commented out
    ): async Text {
        let caller = msg.caller;

        if (Principal.isAnonymous(caller)) {
            return "Please authenticate with Internet Identity.";
        };

        if (nameExists(name)) {
            return "Error: Name already taken.";
        };

        let newDappId = getNewId();

        let newDapp: DApp = {
            id = newDappId;
            name;
            category;
            shortDescription;
            detailedDescription;
            canisterId;
            logoUrl;
            // screenshots;             // Optional screenshots field 
            developer = caller;
        };

        dapps.put(newDappId, newDapp);
        return "DApp submitted successfully!";
    };

    /**
     * Retrieve all DApps
     * @returns Array of all DApps
     */
    public shared query func getAllDapps(): async [DApp] {
        Iter.toArray(dapps.vals())
    };

    /**
     * Retrieve a DApp by its ID
     * @param id - ID of the DApp
     * @returns Optional DApp (null if not found)
     */
    public shared query func getDappById(id: Nat): async ?DApp {
        dapps.get(id)
    };

    /**
     * Retrieve total number of DApps in the store
     * @returns Count of DApps
     */
    public shared query func getTotalDapps(): async Nat {
        dapps.size()
    };

    /**
     * Get DApps owned by the current caller
     * @returns Array of DApps submitted by the caller
     */
    public shared query(msg) func getMyDapps(): async [DApp] {
        if (Principal.isAnonymous(msg.caller)) return [];
        filterDappsByDeveloper(msg.caller)
    };

    /**
     * Get DApps submitted by any developer
     * @param developer - Principal of the developer
     * @returns Array of DApps submitted by the given developer
     */
    public shared query func getDappsByDeveloper(developer: Principal): async [DApp] {
        filterDappsByDeveloper(developer)
    };

    /**
     * Delete a DApp (only by the developer who submitted it)
     * @param id - ID of the DApp to delete
     * @returns Success or unauthorized message
     */
    public shared(msg) func deleteDapp(id: Nat): async Text {
        let caller = msg.caller;

        switch (dapps.get(id)) {
            case null {
                "Error: DApp not found."
            };
            case (?dapp) {
                if (dapp.developer != caller) {
                    "Error: Unauthorized. Only the developer can delete this DApp."
                } else {
                    ignore dapps.remove(id);
                    "DApp deleted successfully."
                }
            };
        };
    };




    



    // FORMER CODES
    
    // // Type definition for a dApp entry
    // public type DApp = {
    //     id: Nat;
    //     name: Text;
    //     description: Text;
    //     link: Text;
    //     developer: Principal;

    
    // };
    
    // // Stable variable to maintain ID counter across upgrades
    // stable var nextId: Nat = 0;
    
    // // Stable entries for HashMap persistence across upgrades
    // stable var dappEntries: [(Nat, DApp)] = [];
    
    // HashMap to store dApps with Nat keys
    // let dapps = HashMap.HashMap<Nat, DApp>(0, Nat.equal, Hash.hash);
    
    // // System functions for upgrade persistence
    // system func preupgrade() {
    //     dappEntries := Iter.toArray(dapps.entries());
    // };
    
    // system func postupgrade() {
    //     dappEntries := [];
    // };
    
    // // Initialize HashMap from stable storage
    // for ((id, dapp) in dappEntries.vals()) {
    //     dapps.put(id, dapp);
    // };
    
    // // Helper function to check if a dApp name already exists
    // private func nameExists(name: Text): Bool {
    //     for (dapp in dapps.vals()) {
    //         if (Text.equal(dapp.name, name)) {
    //             return true;
    //         };
    //     };
    //     false
    // };
    
    /**
     * Submit a new dApp to the store
     * @param name - Name of the dApp
     * @param description - Description of the dApp
     * @param link - Link to the dApp
     * @returns Success or error message
     */
    // // public shared(msg) func submitDapp(name: Text, description: Text, link: Text): async Text {
    // //     // Check if name already exists
    // //     if (nameExists(name)) {
    // //         return "Name already taken";
    // //     };
        
    // //     // Create new dApp with auto-generated ID and caller as developer
    // //     let newDapp: DApp = {
    // //         id = nextId;
    // //         name = name;
    // //         description = description;
    // //         link = link;
    // //         developer = msg.caller;
    // //     };
        
    //     // Store the dApp in HashMap
    //     dapps.put(nextId, newDapp);
        
    //     // Increment ID counter for next submission
    //     nextId += 1;
        
    //     "DApp submitted successfully"
    // };
    
    // /**
    //  * Get all dApps in the store
    //  * @returns Array of all dApps
    //  */
    // public shared func getAllDapps(): async [DApp] {
    //     // Convert HashMap values to Array
    //     Iter.toArray(dapps.vals())
    // };
    
    // /**
    //  * Get a specific dApp by its ID
    //  * @param id - The unique ID of the dApp
    //  * @returns Optional DApp (null if not found)
    //  */
    // public shared func getDappById(id: Nat): async ?DApp {
    //     // Fetch dApp from HashMap by ID
    //     dapps.get(id)
    // };
    
    // /**
    //  * Delete a dApp (only by the developer who submitted it)
    //  * @param id - The unique ID of the dApp to delete
    //  * @returns Success or unauthorized message
    //  */
    // public shared(msg) func deleteDapp(id: Nat): async Text {
    //     // Check if dApp exists
    //     switch (dapps.get(id)) {
    //         case (null) {
    //             "DApp not found"
    //         };
    //         case (?dapp) {
    //             // Check if caller is the developer who submitted the dApp
    //             if (Principal.equal(msg.caller, dapp.developer)) {
    //                 // Remove dApp from HashMap
    //                 ignore dapps.remove(id);
    //                 "DApp deleted successfully"
    //             } else {
    //                 "Unauthorized"
    //             }
    //         };
    //     }
    // };
    
    // /**
    //  * Get total number of dApps in the store
    //  * @returns Total count of dApps
    //  */
    // public shared func getTotalDapps(): async Nat {
    //     dapps.size()
    // };
    
    // /**
    //  * Get dApps by a specific developer
    //  * @param developer - Principal of the developer
    //  * @returns Array of dApps by the specified developer
    //  */
    // public shared func getDappsByDeveloper(developer: Principal): async [DApp] {
    //     let developerDapps = Array.filter<DApp>(
    //         Iter.toArray(dapps.vals()),
    //         func(dapp: DApp): Bool {
    //             Principal.equal(dapp.developer, developer)
    //         }
    //     );
    //     developerDapps
    // };
}
