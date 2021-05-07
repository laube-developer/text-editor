import React, { useState, useEffect } from 'react'
import linhaModel from '../../util/array/modelArrays'
import styles from './style.module.css'


export default function TextBox(props){
    const linha1 = new linhaModel('Esta é minha primeira anotação.', 'p');
    const linha2 = new linhaModel('Regra número 1', 'h2');
    const linha3 = new linhaModel('Cuidado com os elementos html.', 'p');
    const linha4 = new linhaModel('Eles assombram um projeto React', 'p');

    const [nota, setNota] = useState([linha1,linha2, linha3, linha4])

    const comands = {
        Digitar(index, stringAtualizada){
            let linha = nota[index]
            linha.string = stringAtualizada

            let notaBeforeLine = index==0? []: nota.slice(0, index)
            let notaAfterLine = nota.slice(index + 1, nota.length)
            
            let novaNota = []
            notaBeforeLine.map(array=>{
                novaNota.push(array)
            })
            novaNota.push(linha)
            notaAfterLine.map(array=>{
                novaNota.push(array)
            })

            setNota(novaNota)
        },
        Enter(atributos){

            let notaBeforeLine = atributos.index==0? nota.slice(0, 1): nota.slice(0, atributos.index)
            let notaAfterLine = nota.slice(atributos.index +1 , nota.length)

            let novaNota = []
            notaBeforeLine.map(array=>{
                novaNota.push(array)
            })
            novaNota.push(nota[atributos.index])
            novaNota.push(new linhaModel("", nota[atributos.index].tipo))
            notaAfterLine.map(array=>{
                novaNota.push(array)
            })

            setNota(novaNota)
            document.querySelector("#lineIndex_"+(atributos.index+1)).focus()
        },
        Backspace(atributos){
            //Adicionar Backspace
        }

    }

    function Comandos (index, keyPress, isCTRL, node, string){
        if(keyPress!="Control" && isCTRL){
            console.log("CTRL + "+keyPress)
        }

        //Se para a tecla digitada existir um comando específico
        //este comando é executado.
        console.log(index)
        if(comands[keyPress]){
            comands[keyPress]({
                index: index,
                keyPress: keyPress,
                isCTRL: isCTRL,
                node: node
            })
        }
    }
    return (
        <div 
            className={styles.TextBox}
        >
            {nota.map(linhaObg=>{
                return (
                    <input
                        name={"lineIndex_" + nota.indexOf(linhaObg)}
                        type="text"
                        className={
                            styles[linhaObg.tipo]+" "+
                            styles.comp+" "+
                            styles.Linha
                        }
                        id={"lineIndex_" + nota.indexOf(linhaObg)}
                        value={linhaObg.string}

                        onChange={e=>{
                            comands.Digitar(
                                nota.indexOf(linhaObg), //Index da linha
                                e.target.value,         //Texto atualizado da linha
                            )
                        }}
                        onKeyDown={e=>{
                            Comandos(
                                nota.indexOf(linhaObg),
                                e.key,
                                e.ctrlKey,
                                e.target
                            )
                        }}
                    />
                )
            })}
        </div>

    )
}