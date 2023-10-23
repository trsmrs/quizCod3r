import AnswersModel from "@/model/answer";
import QuestionModel from "@/model/question";

const questions: QuestionModel[] = [
    new QuestionModel(306, 'Qual bicho transmite a Doença de Chagas?', [
        AnswersModel.wrong('Abelha'),
        AnswersModel.wrong('Barata'),
        AnswersModel.wrong('Pulga'),
        AnswersModel.right('Barbeiro'),
    ]),
    new QuestionModel(202, 'Qual fruto é conhecido no Norte e Nordeste como "jerimum"?', [
        AnswersModel.wrong('Caju'),
        AnswersModel.wrong('Côco'),
        AnswersModel.wrong('Chuchu'),
        AnswersModel.right('Abóbora'),
    ]),
    new QuestionModel(203, 'Qual é o coletivo de cães?', [
        AnswersModel.wrong('Manada'),
        AnswersModel.wrong('Alcateia'),
        AnswersModel.wrong('Rebanho'),
        AnswersModel.right('Matilha'),
    ]),
    new QuestionModel(204, 'Qual é o triângulo que tem todos os lados diferentes?', [
        AnswersModel.wrong('Equilátero'),
        AnswersModel.wrong('Isóceles'),
        AnswersModel.wrong('Trapézio'),
        AnswersModel.right('Escaleno'),
    ]),
    new QuestionModel(205, 'Quem compôs o Hino da Independência?', [
        AnswersModel.wrong('Castro Alves'),
        AnswersModel.wrong('Manuel Bandeira'),
        AnswersModel.wrong('Carlos Gomes'),
        AnswersModel.right('Dom Pedro I'),
    ]),
    new QuestionModel(206, 'Qual é o antônimo de "malograr"?', [
        AnswersModel.wrong('Perder'),
        AnswersModel.wrong('Fracassar'),
        AnswersModel.wrong('Desprezar'),
        AnswersModel.right('Conseguir'),
    ]),
    new QuestionModel(207, 'Em que país nasceu Carmen Miranda?', [
        AnswersModel.wrong('Argentina'),
        AnswersModel.wrong('Espanha'),
        AnswersModel.wrong('Brasil'),
        AnswersModel.right('Portugal'),
    ]),
    new QuestionModel(208, 'Qual foi o último Presidente do período da ditadura militar no Brasil?', [
        AnswersModel.wrong('Costa e Silva'),
        AnswersModel.wrong('Emílio Médici'),
        AnswersModel.wrong('Ernesto Geisel'),
        AnswersModel.right('João Figueiredo'),
    ]),
    new QuestionModel(209, 'Seguindo a sequência do baralho, qual carta vem depois do dez?', [
        AnswersModel.wrong('Ás'),
        AnswersModel.wrong('Nove'),
        AnswersModel.wrong('Rei'),
        AnswersModel.right('Valete'),
    ]),
    new QuestionModel(210, 'O adjetivo "venoso" está relacionado a:', [
        AnswersModel.wrong('Vela'),
        AnswersModel.wrong('Vento'),
        AnswersModel.wrong('Vênia'),
        AnswersModel.right('Veia'),
    ]),
    new QuestionModel(211, 'Que nome se dá à purificação por meio da água?', [
        AnswersModel.wrong('Abrupção'),
        AnswersModel.wrong('Abolição'),
        AnswersModel.wrong('Abnegação'),
        AnswersModel.right('Ablução'),
    ]),
    new QuestionModel(212, 'Qual montanha se localiza entre a fronteira do Tibet com o Nepal?', [
        AnswersModel.wrong('Monte Branco'),
        AnswersModel.wrong('Monte Fuji'),
        AnswersModel.wrong('Monte Carlo'),
        AnswersModel.right('Monte Everest'),
    ]),
    new QuestionModel(213, 'Em que parte do corpo se encontra a epiglote?', [
        AnswersModel.wrong('Estômago'),
        AnswersModel.wrong('Pâncreas'),
        AnswersModel.wrong('Rim'),
        AnswersModel.right('Pescoço'),
    ]),
    new QuestionModel(214, 'A compensação por perda é chamada de...', [
        AnswersModel.wrong('Déficit'),
        AnswersModel.wrong('Indexação'),
        AnswersModel.wrong('Indébito'),
        AnswersModel.right('Indenização'),
    ]),
    new QuestionModel(215, 'Que personagem do folclore brasileiro tem uma perna só?', [
        AnswersModel.wrong('Cuca'),
        AnswersModel.wrong('Curupira'),
        AnswersModel.wrong('Boitatá'),
        AnswersModel.right('Saci-pererê'),
    ]),
    new QuestionModel(216, 'Quem é o "patrono" do Exército Brasileiro?', [
        AnswersModel.wrong('Marechal Deodoro'),
        AnswersModel.wrong('Barão de Mauá'),
        AnswersModel.wrong('Marquês de Pombal'),
        AnswersModel.right('Duque de Caxias'),
    ]),
]

export default questions