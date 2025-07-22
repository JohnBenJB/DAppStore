import Array "mo:base/Array";
import Text "mo:base/Text";

actor DAppStore {

  type DApp = {
    name : Text;
    description : Text;
    tags : [Text];
    canisterId : Text;
  };

  var dapps : [DApp] = [];

  public func addDApp(name : Text, description : Text, tags : [Text], canisterId : Text) : async () {
    let newDApp : DApp = {
      name = name;
      description = description;
      tags = tags;
      canisterId = canisterId;
    };
    dapps := Array.append<DApp>(dapps, [newDApp]);
  };

  public query func searchDApps(keyword : Text) : async [DApp] {
    let lowerKeyword = Text.toLowercase(keyword);
    Array.filter<DApp>(
      dapps,
      func (dapp : DApp) : Bool {
        let inName = Text.contains(Text.toLowercase(dapp.name), #text lowerKeyword);
        let inDesc = Text.contains(Text.toLowercase(dapp.description), #text lowerKeyword);
        let inTags = Array.find<Text>(
          dapp.tags,
          func (tag) { Text.contains(Text.toLowercase(tag), #text lowerKeyword) }
        ) != null;
        inName or inDesc or inTags
      }
    )
  };
}