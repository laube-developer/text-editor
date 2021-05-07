class linhaModel{

    constructor(string, tipo){
        this.string = string;
        this.bold = [];
        this.italic = [];
        this.tipo = tipo?tipo:"";
        this.colors = {
            'red': [],
            'green':[],
            'blue':[],
            'purple':[]
        };
        this.background = {
            'red': [],
            'green':[],
            'blue':[],
            'purple':[]
        };

    }
    digitar(char, pos){
        if(char.length == 1 && pos <= this.string.length){
            let text = [
                this.string.slice(0, pos),
                this.string.slice(pos, this.string.length)
            ]
            this.string = text[0] + char + text[1];
        }
    }
    apagar(pos){
        if(pos <= this.string.length){
            let text = [
                this.string.slice(0, (pos -1)),
                this.string.slice(pos, this.string.length)
            ];
            this.string = text[0] + text[1];
        }
    }
    incluirArray(start, end, array){
        //Retorna um array com as alterações feitas
        //Utilizado para adicionar bold, italico, cor do texto, cor de fundo, etc

        //quatro situações
        //1) start e end não então dentro de um array    |> sobrepos == [null, null, null, null]
        //2) start esta dentro de um array               |> sobrepos == [x, null, y, null]
        //3) end está dentro de um array                 |> sobrepos == [null, x, null, y]
        //4) start e end estão dentro de um array        |> sobrepos == [x, a, y, b]

        let sobrepos = getSobrepos(start, end, array);
        let status = verificaStatus(sobrepos)
        let dadosOp = getDadosOperacao(sobrepos, status, start, end, array);

        let arrayFinal = dadosOp.arrayDividido[0];
        arrayFinal.push(dadosOp.arrayParaAdicionar)
        for(let cont in dadosOp.arrayDividido[1]){
            arrayFinal.push(dadosOp.arrayDividido[1][cont])
        }

        return arrayFinal;
        
    }
    excluirArray(start, end, array){
        let sobrepos = getSobrepos(start, end, array)
        console.log(sobrepos)
        let arrayDividido = [
            array.slice(0, sobrepos[2]),
            array.slice(sobrepos[3]+1, array.length)
        ]
        let arrayFinal = arrayDividido[0]
        for(let cont in arrayDividido[1]){
            arrayFinal.push(arrayDividido[1][cont])
        }
        console.log(arrayFinal)
    }
    adicionarBold(posInicial, posFinal){
        this.bold = this.incluirArray(posInicial, posFinal, this.bold)

    }
    adicionarItalico(posInicial, posFinal){
        this.italic = this.incluirArray(posInicial, posFinal, this.italic);

    }
    adicionarCorTexto(posInicial, posFinal, codigo){
        this.colors[codigo] = this.incluirArray(posInicial, posFinal, this.colors[codigo])
    }

    adicionarMarcacao(posInicial, posFinal, codigo){
        this.background[codigo] = this.incluirArray(posInicial, posFinal, this.background[codigo]);

    }

    excluirBold(posInicial, posFinal){
        this.bold = this.excluirArray(posInicial, posFinal, this.bold);

    }

    excluirItalic(posInicial, posFinal){
        this.italic = this.excluirArray(posInicial, posFinal, this.italic);

    }

    excluirColor(posInicial, posFinal, codigo){
        this.color[codigo] = this.excluirArray(posFinal, posFinal, this.color[codigo]);

    }

    excluirMarcacao(posInicial, posFinal, codigo){
        this.background[codigo] = this.excluirArray(posInicial, posFinal, this.background[codigo]);

    }
}

export default linhaModel;