export default constNode =
{
    type: "variable",
    name: "Read-only Variable (let)",
    format: "let {name} = {value};",
    params:
    [
        "name:string",
        "value:any"
    ],
    rules:
    {
        canBeOverwritten: false,
    },
    doc:
    {
        description: "The const declaration declares a block-scoped local variable, setting it to a value.",
        parameters:
        [
            "name:The constant's name, which can be any legal identifier.",
            "value:The constant's value. This can be any legal expression, including a function expression."
        ]
    }
}
