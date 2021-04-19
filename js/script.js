function exec(){
let n;
let salarioBruto;
let dpdt;
// dpdt é "dependentes"
let realBrasileiro = "R$";

nome = document.getElementById("nome").value;
salarioBruto = document.getElementById("salarioB").value;
dpdt = document.getElementById("numeroDep").value;
				
//calculando os dependentes
let descontosDep;
descontosDep = dpdt * 189.59;
//Abaixo está o código usando if para calcular o desconto do INSS
let inss;
let pinss;
// pinss significa "porcentagem do inss"

if (salarioBruto < 1100.01) {
	inss = salarioBruto * 0.075;
	pinss = "7.50%";
}
	if (salarioBruto > 1100.00 && salarioBruto < 2203.49) {
		inss = salarioBruto * 0.09;
		pinss = "9.00%";
	}
		if (salarioBruto > 2203.48 && salarioBruto < 3205.23) {
			inss = salarioBruto * 0.12;
			pinss = "12.00%";
		}
			if (salarioBruto > 3305.22 && salarioBruto < 6433.58) {
				inss = salarioBruto * 0.14;
				pinss = "14.00%";
			}
				if (salarioBruto > 6433.57){inss = 751.99; pinss = "14.00%"; }

let salarioParcial;
salarioParcial = salarioBruto - inss;

//Abaixo está o código usando if para calcular o desconto do IRPF

let irpf;
let pirpf;
// pirpf significa "porcentagem do imposto de renda"

if (salarioParcial < 1903.99) {
	irpf = 0.00;
	pirpf = "0.00%";
}
	if (salarioParcial > 1903.98 && salarioParcial < 2826.66) {
		pirpf = "7.50%";
		irpf = ((((salarioBruto - descontosDep) - inss) * 0.075) - 142.80);
	}
		if (salarioParcial > 2826.65 && salarioParcial < 3751.06) {
			pirpf = "15.00%";
			irpf = ((((salarioBruto - descontosDep) - inss) * 0.15) - 354.80);
		}
			if (salarioParcial > 3751.05 && salarioParcial < 4664.69) {
				pirpf = "22.50%";
				irpf = ((((salarioBruto - descontosDep) - inss) * 0.225) - 636.13);
			}
				if (salarioParcial > 4664.68) {
					pirpf = "27.50%";
					irpf = ((((salarioBruto - descontosDep) - inss) * 0.275) - 869.36);
				}
					if (irpf < 0) { irpf = 0.00; }

//calculando o salário liquido
let salarioL;
salarioL = salarioParcial - irpf;
let salarioBrutoDecimal, descontoINSSDecimal, descontoIRPFDecimal, salarioLiquidoDecimal;

salarioBrutoDecimal = parseFloat(salarioBruto);
salarioBrutoDecimal = salarioBrutoDecimal.toFixed(2);

descontoINSSDecimal = parseFloat(inss);
descontoINSSDecimal = inss.toFixed(2);

descontoIRPFDecimal = parseFloat(irpf);
descontoIRPFDecimal = irpf.toFixed(2);

salarioLiquidoDecimal = parseFloat(salarioL);
salarioLiquidoDecimal = salarioL.toFixed(2);
//criando o objeto e configurando seus elementos para serem introduzidos na tabela

let dadosTabela = {nome_id:nome, salario_bruto:realBrasileiro+salarioBrutoDecimal, dependentes:dpdt,
 porcentagem_inss:pinss, tbinss:realBrasileiro+descontoINSSDecimal, porcentagem_irpf:pirpf,
  tbirpf:realBrasileiro+descontoIRPFDecimal, salario_liquido:realBrasileiro+salarioLiquidoDecimal};

	var tabela = document.getElementById("tabelaDosDados");
  	var row = tabela.insertRow(-1);
  	var cell1 = row.insertCell(0);
  	var cell2 = row.insertCell(1);
  	var cell3 = row.insertCell(2);
  	var cell4 = row.insertCell(3);
  	var cell5 = row.insertCell(4);
  	var cell6 = row.insertCell(5);
  	var cell7 = row.insertCell(6);
  	var cell8 = row.insertCell(7);
  		cell1.innerHTML = dadosTabela.nome_id;
  		cell2.innerHTML = dadosTabela.salario_bruto;
  		cell3.innerHTML = dadosTabela.dependentes;
  		cell4.innerHTML = dadosTabela.porcentagem_inss;
  		cell5.innerHTML = dadosTabela.tbinss;
  		cell6.innerHTML = dadosTabela.porcentagem_irpf;
  		cell7.innerHTML = dadosTabela.tbirpf;
  		cell8.innerHTML = dadosTabela.salario_liquido;

}