"use client";
import { useState, useEffect } from 'react';
import { GiSun, GiSunflower, GiElectric } from 'react-icons/gi';
import { FaLeaf, FaWater, FaSeedling, FaGlobeAmericas } from 'react-icons/fa';
import Cabecalho from '../components/Header';
import Footer from '../components/Footer';

export default function SobreProjeto() {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowContent(true), 300);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
        <Cabecalho/>
        <div className="min-h-screen bg-gradient-to-b from-teal-50 to-teal-100 p-8 flex flex-col items-center justify-center transition-opacity duration-1000 ease-in-out">
            
            <div className={`transition-all duration-1000 transform ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h1 className="text-4xl font-bold text-teal-700 mb-8 text-center">Por que usar Painéis Solares?</h1>

                <div className="flex justify-center mb-10 space-x-4">
                    <GiSun className="text-yellow-500 text-7xl animate-pulse" />
                    <GiElectric className="text-teal-600 text-7xl animate-bounce" />
                </div>

                <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-10 space-y-8 text-gray-700 leading-relaxed">
                    <div className="flex items-center space-x-4">
                        <FaLeaf className="text-green-500 text-3xl" />
                        <h2 className="text-2xl font-semibold text-teal-700">Benefícios para o Meio Ambiente</h2>
                    </div>
                    <p>
                        Os painéis solares são uma fonte de energia limpa e renovável, reduzindo a dependência de combustíveis fósseis
                        e diminuindo a emissão de gases de efeito estufa. Ao optar pela energia solar, você contribui para a preservação
                        dos recursos naturais e ajuda a combater o aquecimento global.
                    </p>

                    <div className="flex items-center space-x-4">
                        <FaWater className="text-blue-500 text-3xl" />
                        <h2 className="text-2xl font-semibold text-teal-700">Economia de Recursos Hídricos</h2>
                    </div>
                    <p>
                        A energia solar requer pouca água para a manutenção, ao contrário das usinas que consomem grandes quantidades
                        de água. Em regiões onde a escassez de água é um problema, a energia solar é uma excelente alternativa para
                        evitar o consumo excessivo de recursos hídricos.
                    </p>

                    <div className="flex items-center space-x-4">
                        <FaSeedling className="text-green-600 text-3xl" />
                        <h2 className="text-2xl font-semibold text-teal-700">Impacto Econômico Positivo</h2>
                    </div>
                    <p>
                        Ao instalar um sistema de energia solar, você não só reduz sua conta de energia, mas também investe em um recurso
                        que proporciona retorno financeiro a longo prazo. Com o tempo, os custos de instalação são recuperados, e você
                        continua a economizar. Além disso, a valorização da propriedade é um benefício adicional.
                    </p>

                    <div className="flex items-center space-x-4">
                        <GiSunflower className="text-yellow-600 text-3xl" />
                        <h2 className="text-2xl font-semibold text-teal-700">Sustentabilidade e Autossuficiência</h2>
                    </div>
                    <p>
                        Com um sistema de energia solar, é possível alcançar a autossuficiência energética. Isso significa que você depende
                        menos de fornecedores externos e pode produzir sua própria energia. Essa independência proporciona estabilidade
                        e segurança energética, além de uma maior autonomia.
                    </p>

                    <div className="flex items-center space-x-4">
                        <FaGlobeAmericas className="text-teal-500 text-3xl" />
                        <h2 className="text-2xl font-semibold text-teal-700">Redução da Pegada de Carbono</h2>
                    </div>
                    <p>
                        A transição para a energia solar contribui para a redução da pegada de carbono, diminuindo o impacto ambiental
                        das atividades humanas. Ao adotar essa tecnologia, você ajuda a criar um futuro mais sustentável e diminui
                        a poluição e a degradação ambiental.
                    </p>
                </div>
            </div>

           
        </div>
        
        <Footer />
        </>
    );
}