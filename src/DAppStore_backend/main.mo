import HashMap "mo:base/HashMap";
import Principal "mo:base/Principal";
import Iter "mo:base/Iter";
import Array "mo:base/Array";
import Text "mo:base/Text";
import Nat "mo:base/Nat";
import Nat32 "mo:base/Nat32";

// Main actor for DAppStore - a decentralized marketplace for dApps
persistent actor DAppStore {

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
    // Storage - All variables are automatically stable in persistent actors
    // ------------------------------------------------------------------------

    /** Storage for all DApps as an array */
    var dapps: [DApp] = [];

    /** Counter to generate unique IDs */
    var nextDappId: Nat = 0;

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
     * Find DApp by ID
     */
    private func findDappById(id: Nat): ?DApp {
        for (dapp in dapps.vals()) {
            if (dapp.id == id) {
                return ?dapp;
            };
        };
        null
    };

    /**
     * Filter DApps by developer
     */
    private func filterDappsByDeveloper(developer: Principal): [DApp] {
        Array.filter<DApp>(
            dapps,
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
     */
    public shared(msg) func submitDapp(
        name: Text,
        category: Text,
        shortDescription: Text,
        detailedDescription: Text,
        canisterId: Text,
        logoUrl: Text
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
            developer = caller;
        };

        dapps := Array.append<DApp>(dapps, [newDapp]);
        return "DApp submitted successfully!";
    };

    /**
     * Retrieve all DApps
     */
    public shared query func getAllDapps(): async [DApp] {
        dapps
    };

    /**
     * Retrieve a DApp by its ID
     */
    public shared query func getDappById(id: Nat): async ?DApp {
        findDappById(id)
    };

    /**
     * Retrieve total number of DApps in the store
     */
    public shared query func getTotalDapps(): async Nat {
        dapps.size()
    };

    /**
     * Get DApps owned by the current caller
     */
    public shared query(msg) func getMyDapps(): async [DApp] {
        if (Principal.isAnonymous(msg.caller)) return [];
        filterDappsByDeveloper(msg.caller)
    };

    /**
     * Get DApps submitted by any developer
     */
    public shared query func getDappsByDeveloper(developer: Principal): async [DApp] {
        filterDappsByDeveloper(developer)
    };

    /**
     * Delete a DApp (only by the developer who submitted it)
     */
    public shared(msg) func deleteDapp(id: Nat): async Text {
        let caller = msg.caller;

        switch (findDappById(id)) {
            case null {
                "Error: DApp not found."
            };
            case (?dapp) {
                if (dapp.developer != caller) {
                    "Error: Unauthorized. Only the developer can delete this DApp."
                } else {
                    dapps := Array.filter<DApp>(dapps, func(d: DApp): Bool { d.id != id });
                    "DApp deleted successfully."
                }
            };
        };
    };

    // ------------------------------------------------------------------------
    // Principal ID & Authentication Functions
    // ------------------------------------------------------------------------

    /**
     * Get the caller's Principal ID
     */
    public shared query(msg) func getMyPrincipal(): async ?Principal {
        if (Principal.isAnonymous(msg.caller)) {
            null
        } else {
            ?msg.caller
        }
    };

    /**
     * Check if user is authenticated
     */
    public shared query(msg) func isAuthenticated(): async Bool {
        not Principal.isAnonymous(msg.caller)
    };

    /**
     * Get caller's Principal ID as text
     */
    public shared query(msg) func getMyPrincipalText(): async ?Text {
        if (Principal.isAnonymous(msg.caller)) {
            null
        } else {
            ?Principal.toText(msg.caller)
        }
    };

}
