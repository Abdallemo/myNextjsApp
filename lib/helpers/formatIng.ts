const compactNumberFormating = new Intl.NumberFormat(undefined,{notation:'compact'})

export function FormatCompactNumber (number:number) {
    return compactNumberFormating.format(number);
    
}