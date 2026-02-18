#  Gerenciador de plantas

Um sistema de gerenciamento de regas para plantas, desenvolvido para automatizar o controle de umidade e saúde do seu jardim particular.
O projeto calcula automaticamente a necessidade de rega com base na frequência definida e armazena os dados localmente.



## Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando o conceito de **Clean Code** e separação de responsabilidades (HTML, CSS e JS independentes):

* **HTML5**: Estrutura semântica para melhor acessibilidade.
* **CSS3**: Layout moderno utilizando **CSS Grid** e Variáveis (Design Responsivo).
* **JavaScript (ES6+)**: Lógica de manipulação de DOM e cálculos de data.
* **LocalStorage**: Persistência de dados no lado do cliente (não requer banco de dados externo).

## Funcionalidades

- [x] **Adição Dinâmica**: Adicione novas plantas definindo nome e frequência de rega.
- [x] **Cálculo de Status**: O sistema calcula em tempo real se a planta precisa de água comparando a data atual com a última rega.
- [x] **Persistência de Dados**: Os dados não são perdidos ao atualizar a página.
- [x] **Interface Responsiva**: Dashboard que se adapta a diferentes tamanhos de tela.
- [x] **Gerenciamento**: Opção de marcar como "Regada" ou excluir a planta da lista.

## Como executar o projeto

Como este é um projeto front-end puro, não é necessário instalar dependências.

1. Clone o repositório:
   ```bash
   git clone [https://github.com/SEU_USUARIO/plant-manager.git](https://github.com/SEU_USUARIO/plant-manager.git)
