import Vue, { PluginFunction, VueConstructor } from "vue";

export default function install<T>(
  Vue: VueConstructor<Vue>,
  options: object
): PluginFunction<T>;
