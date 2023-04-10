import { ImageSource, Loader } from "excalibur";
import sword from "./images/sword.png"

const Images = {
  Sword: new ImageSource(sword)
};

const loader = new Loader();
const allResources = { ...Images };
for (const res in allResources) {
  console.log("loading resource: " + res);
  loader.addResource(allResources[res]);
  console.log("loaded resource: " + res);
}

export { Images, loader };