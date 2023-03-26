export default letNode =
{
    type: "variable",
    name: "Rewritable Variable (let)",
    format: "let {name} = {value};",
    params:
    [
        "name:string",
        "value:any"
    ],
    rules:
    {
        canBeOverwritten: true,
    },
    doc:
    {
        description: "The let declaration declares a block-scoped local variable, optionally initializing it to a value.",
        parameters:
        [
            "name:The names of the variable or variables to declare. Each must be a legal JavaScript identifier.",
            "value:For each variable declared, you may optionally specify its initial value to any legal JavaScript expression."
        ]
    }
}
