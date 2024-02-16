
//Cálculo de Salário


var salarioBruto = 1300.00;
var salarioLiquido
var imposto
var tarifaImposto
var beneficio = 250
var resultado


	if (salarioBruto <= 1100){
		imposto = (salarioBruto * 0.05);
        tarifaImposto = (5);
} 
	else if (salarioBruto >= 1001 &&  2000){
		imposto = (salarioBruto * 0.10);
        tarifaImposto = (10);
}
	if (salarioBruto >= 2001 &&  3000){ 
		imposto = (salarioBruto * 0.15)
        tarifaImposto = (15);
} 
        salarioLiquido = salarioBruto - imposto + beneficio

		console.log("Salário Bruto = R$" + salarioBruto)
        console.log("Imposto Aplicado = " + tarifaImposto + "%")
		console.log("Valor do Imposto = R$" + imposto)
        console.log("Benefícios = " + beneficio)
        console.log("Salário Líquido = R$" + salarioLiquido)
        
        
        