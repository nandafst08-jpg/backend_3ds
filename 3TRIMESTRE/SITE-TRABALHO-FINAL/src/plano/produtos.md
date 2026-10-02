# Documento de Requisitos: Página de Cardápio (Produtos) — /produtos

## 1. Visão Geral da Página
O cardápio digital da **Velvet Coffee** deve ser altamente escaneável, permitindo que o usuário navegue rapidamente pelas categorias de cafés, doces e lanches, com apelo visual focado no estímulo sensorial.

## 2. Estrutura do Menu e Categorias
A página será dividida estritamente nas seguintes seções:

### ☕ Cafés
*   Espresso
*   Cappuccino
*   Latte
*   Mocha
*   Iced Coffee

### 🍰 Doces
*   Brownie
*   Cheesecake
*   Chocolate Cake
*   Cookies

### 🥪 Lanches
*   Croissant
*   Toast
*   Sandwich

## 3. Elementos do Card de Produto
Cada produto listado deve obrigatoriamente aparecer em um bloco visual (*card*) individual contendo:
*   **Nome do Produto:** Em destaque.
*   **Descrição Gastronômica:** Texto curto e sensorial (ex: *"Espresso tirado na hora com grãos selecionados 100% arábica, notas de chocolate e finalização aveludada"*).
*   **Preço:** Formatado claramente na moeda local.
*   *(Opcional recomendado para conversão)*: Foto real do produto em fundo limpo e desfocado.

## 4. Diretrizes de Usabilidade e Vendas (UX/UI)
*   **Navegação Fixa (Sticky Menu):** Barra de categorias fixa no topo ao rolar a página, facilitando alternar entre "Cafés", "Doces" e "Lanches" sem precisar rolar tudo de volta.
*   **Estímulo Visual:** Organização em grid limpo (2 ou 3 colunas no desktop, 1 coluna no mobile).
*   **Performance:** Implementação de *lazy loading* para que as imagens carreguem apenas quando o usuário rolar a tela até elas.
