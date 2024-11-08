declare let $: any;

export default $;

// If the library is has multiple top-level variables, export and import by name instead;
declare module "jquery" {
    let $: any;
    let jQuery: any;

    export {$};
    export { jQuery};
}
