# Paraxut Charm

Quero transformar este projeto num website profissional para um restaurante português chamado:

RESTAURANTE PARAXUT
DESDE 1992

IMPORTANTE:
Antes de escrever código, analisa primeiro todo o projeto atual, a estrutura de pastas, os ficheiros existentes, as dependências e a tecnologia utilizada.

Não apagues código existente sem necessidade.
Não cries uma aplicação completamente diferente sem primeiro perceber o que já existe.
Se alguma coisa precisar de ser alterada, explica brevemente o que vais alterar e porquê.

==================================================
1. INFORMAÇÕES DO RESTAURANTE
==================================================

Nome:
Restaurante Paraxut

Ano:
Desde 1992

Tipo:
Restaurante tradicional português

Localização:
Praça de São Tiago 14,
4800-445 Guimarães,
Portugal

Telefone:
+351 929 331 669

Email:
dimasbisnes66@gmail.com

Facebook:
O restaurante tem Facebook, mas não é atualizado frequentemente.
Não inventes o URL do Facebook. Deixa-o configurável num ficheiro de configuração.

Horário:
Todos os dias

Almoço:
12:00 - 15:00

Jantar:
19:00 - 22:00

Reservas:
O restaurante aceita reservas dependendo do período.
A principal forma de contacto para reservas deve ser WhatsApp.

WhatsApp:
+351 929 331 669

IMPORTANTE:
Não criar um sistema complexo de reservas com pagamentos ou backend nesta primeira versão.

Criar um formulário de reserva com:
- Nome
- Número de pessoas
- Data
- Hora
- Mensagem

Quando o utilizador enviar o formulário, preparar uma mensagem automaticamente e abrir o WhatsApp do restaurante com essa mensagem.

Exemplo:

Olá, gostaria de fazer uma reserva no Restaurante Paraxut.

Nome: João
Pessoas: 4
Data: 15/09/2026
Hora: 20:00
Mensagem: ...

O formulário deve deixar claro que o pedido de reserva só fica confirmado depois de o restaurante confirmar pelo WhatsApp.

==================================================
2. OBJETIVO PRINCIPAL
==================================================

O principal objetivo do website é ATRair TURISTAS que visitam Guimarães.

O website deve transmitir imediatamente:

- comida portuguesa tradicional
- qualidade
- tradição
- localização privilegiada
- ambiente acolhedor
- restaurante existente desde 1992

Muitos clientes são turistas que visitam o centro histórico de Guimarães.

O website deve funcionar especialmente bem em telemóveis.

Um turista deve conseguir entrar no site e rapidamente:

1. perceber que é um restaurante português;
2. ver fotografias apelativas;
3. consultar o menu;
4. descobrir onde fica;
5. contactar o restaurante;
6. fazer um pedido de reserva pelo WhatsApp.

==================================================
3. IDENTIDADE VISUAL
==================================================

Criar um design:

- tradicional
- elegante
- acolhedor
- sofisticado
- português
- inspirado no ambiente histórico de Guimarães

Cores principais:

- bege
- castanho
- creme
- preto/detalhes escuros
- branco

Não quero um website demasiado moderno que pareça uma startup.

Também não quero que pareça antigo.

Quero uma combinação de:
TRADIÇÃO + ELEGÂNCIA + MODERNIDADE.

Usar tipografia elegante para títulos e uma fonte muito legível para textos.

Criar:
- Light mode
- Dark mode

O dark mode deve continuar a parecer elegante e relacionado com restaurante, sem destruir a identidade visual.

==================================================
4. ESTRUTURA DO WEBSITE
==================================================

Criar as seguintes páginas/secções:

HOME
SOBRE
MENU
GALERIA
AVALIAÇÕES
RESERVAS
LOCALIZAÇÃO
CONTACTOS

Pode ser uma Single Page Application se isso fizer sentido para o projeto atual.

A navegação deve permitir fazer scroll suave entre as secções.

==================================================
5. HEADER
==================================================

Criar uma navbar profissional.

Desktop:
- Logo
- Início
- Sobre
- Menu
- Galeria
- Avaliações
- Reservas
- Localização

Adicionar botão destacado:
"Reservar pelo WhatsApp"

Mobile:
- logo
- hamburger menu
- menu lateral ou dropdown elegante

A navbar deve ficar sticky durante o scroll.

Não ocupar demasiado espaço no telemóvel.

==================================================
6. HERO
==================================================

Criar uma hero section muito visual.

Deve apresentar:

RESTAURANTE PARAXUT

DESDE 1992

"Sabores tradicionais portugueses no coração de Guimarães"

Este texto pode ser melhorado se encontrares uma alternativa mais elegante, mas NÃO inventes factos sobre o restaurante.

Adicionar dois botões:

"Ver Menu"

"Reservar pelo WhatsApp"

Adicionar uma fotografia grande e apelativa de comida/restaurante.

IMPORTANTE:
As imagens reais do restaurante serão adicionadas posteriormente.

Criar uma estrutura simples para trocar facilmente as imagens.

==================================================
7. SOBRE O RESTAURANTE
==================================================

Criar uma secção "A nossa história".

Usar apenas informações verdadeiras.

Informações disponíveis:

O restaurante chama-se Paraxut porque o proprietário, antes de trabalhar no restaurante, era paraquedista.

O restaurante existe desde 1992.

O restaurante é gerido por um casal e, ocasionalmente, a filha ajuda no restaurante.

Valores principais:
- qualidade
- tradição

Não inventar:
- nomes dos proprietários
- nomes de chefs
- prémios
- datas adicionais
- histórias não fornecidas

Escrever o texto de forma bonita e profissional, mas sem inventar informações.

==================================================
8. MENU
==================================================

O menu é uma das partes MAIS IMPORTANTES do website.

O restaurante possui menu em quatro línguas:

Português
English
Español
Français

Criar um sistema de tradução que permita mudar todo o conteúdo do website entre estas quatro línguas.

Não usar Google Translate automaticamente.

Criar os textos manualmente nos ficheiros de tradução.

Categorias do menu:

- Sopas
- Entradas
- Menu Infantil
- Vegetariano
- Saladas
- Peixes
- Carnes
- Prato do Dia
- Sugestão do Chefe

O menu deve ter uma apresentação visual elegante.

Desktop:
pode utilizar cards ou uma estrutura semelhante a uma carta de restaurante.

Mobile:
deve ser extremamente fácil de ler.

Cada prato pode apresentar:

Nome
Descrição
Preço

Não inventar preços.

Se um prato não tiver preço disponível, deixar o preço configurável ou ocultá-lo até ser preenchido.

Criar os dados do menu num ficheiro separado.

Por exemplo:

src/data/menu.ts

ou equivalente à arquitetura existente.

NÃO colocar todos os pratos diretamente dentro dos componentes.

==================================================
9. DADOS DO MENU
==================================================

Usar como referência o menu físico fornecido pelo restaurante.

O menu contém pratos como:

SOPAS:
- Sopa de legumes
- Caldo verde

ENTRADAS:
- Pão
- Couvert
- Pão, azeitonas e azeite
- Pimentos Padrón
- Cogumelos crocantes
- Asinhas de frango picantes
- Tábua de queijo e presunto
- Tábua de salgadinhos
- Gambas ao alho

MENU INFANTIL:
- Nuggets
- Pizza com batata frita

VEGETARIANO:
- Bolonhesa vegetariana
- Tagliatelle de legumes

SALADAS:
- Salada de frango
- Salada de atum
- Salada de salmão fumado

PEIXES:
- Sardinhas assadas na brasa
- Filetes de robalo
- Bacalhau com broa
- Polvo à lagareiro

CARNES:
- Secretos de porco preto c/migas
- Bife 5 pimentas
- Naco à conquistador
- T-bone steak
- Posta à moda de Mirandela

PRATO DO DIA:
- Tagliatelle c/ gambas
- Bacalhau c/ broa
- Bacalhau c/ natas
- Pernil assado no forno
- Vitela assada no forno
- Arroz de pato c/ queijo

SUGESTÃO DO CHEFE:
- Picanha c/ feijão preto

IMPORTANTE:
Estes dados devem ser tratados como base inicial.

O menu físico é a fonte de verdade.

Não inventar pratos, ingredientes ou preços.

Estruturar o código para que eu possa posteriormente corrigir/adicionar/remover pratos facilmente.

==================================================
10. MENU MULTILINGUE
==================================================

O utilizador deve poder selecionar:

🇵🇹 Português
🇬🇧 English
🇪🇸 Español
🇫🇷 Français

O idioma selecionado deve alterar:
- navegação
- títulos
- textos
- menu
- botões
- formulário
- contactos
- mensagens

Guardar as traduções numa estrutura organizada.

Não duplicar componentes para cada idioma.

Criar um sistema reutilizável de tradução.

==================================================
11. GALERIA
==================================================

Criar uma galeria profissional.

Teremos fotografias reais do:
- restaurante
- pratos
- ambiente
- fachada
- detalhes

Por enquanto utilizar placeholders organizados.

Criar uma estrutura fácil para posteriormente substituir os placeholders pelas fotografias reais.

A galeria deve ter:
- grid elegante
- hover
- lightbox
- navegação entre imagens
- suporte mobile

Não utilizar imagens aleatórias que possam transmitir uma aparência diferente do restaurante quando forem adicionadas as fotografias reais.

==================================================
12. AVALIAÇÕES
==================================================

Criar uma secção de avaliações/testemunhos.

Não inventar avaliações reais.

Criar inicialmente apenas a estrutura/componente e alguns placeholders claramente identificados para eu inserir posteriormente avaliações verdadeiras.

Não inventar nomes de clientes nem estrelas.

==================================================
13. LOCALIZAÇÃO
==================================================

Criar uma secção muito importante para turistas.

Mostrar:

Restaurante Paraxut

Praça de São Tiago 14
4800-445 Guimarães
Portugal

Adicionar:
- mapa
- botão "Abrir no Google Maps"
- indicação de que fica no centro histórico de Guimarães

Não inventar informações sobre estacionamento ou transportes.

Se for possível, preparar integração com Google Maps através de iframe ou link configurável.

==================================================
14. CONTACTOS
==================================================

Mostrar:

Telefone:
+351 929 331 669

WhatsApp:
+351 929 331 669

Email:
dimasbisnes66@gmail.com

Facebook:
deixar URL configurável

Criar botões:

"WhatsApp"
"Email"
"Google Maps"

O botão WhatsApp deve funcionar diretamente no telemóvel e desktop.

==================================================
15. FOOTER
==================================================

Criar footer elegante com:

RESTAURANTE PARAXUT
DESDE 1992

Morada
Telefone
WhatsApp
Email

Links:
Início
Sobre
Menu
Galeria
Reservas
Localização

Idiomas:
Português
English
Español
Français

Adicionar copyright.

==================================================
16. EXPERIÊNCIA PARA TURISTAS
==================================================

Esta parte é MUITO IMPORTANTE.

O website deve ser pensado para pessoas que não conhecem o restaurante.

Criar uma pequena área que destaque:

"Traditional Portuguese Cuisine in Guimarães"

ou equivalente na língua selecionada.

Mostrar claramente:
- localização
- menu
- comida portuguesa
- horário
- reserva

O site deve funcionar bem para turistas estrangeiros.

==================================================
17. RESPONSIVE DESIGN
==================================================

O website tem de ser completamente responsivo.

Testar mentalmente pelo menos:

320px
375px
390px
430px
768px
1024px
1280px
1440px

Não permitir:
- overflow horizontal
- textos cortados
- botões demasiado pequenos
- imagens deformadas
- menus difíceis de utilizar

Mobile deve ser tratado como prioridade.

==================================================
18. ANIMAÇÕES
==================================================

Utilizar animações médias.

Quero:
- fade in
- reveal on scroll
- hover suave
- transições
- pequenas animações na navbar
- animações nos cards

Não exagerar.

O website deve parecer premium, não uma demonstração de efeitos.

Respeitar também:
prefers-reduced-motion

==================================================
19. SEO
==================================================

Preparar o website para SEO.

Title:

Restaurante Paraxut | Restaurante Português em Guimarães

Meta description relacionada com:
- Restaurante Paraxut
- Guimarães
- comida portuguesa
- centro histórico

Adicionar:
- headings corretos
- alt text nas imagens
- HTML semântico
- Open Graph
- favicon
- dados estruturados de restaurante, se adequado

Não inventar avaliações, preços ou outros dados no schema.

==================================================
20. ACESSIBILIDADE
==================================================

Garantir:

- contraste adequado
- navegação por teclado
- aria-label quando necessário
- alt text
- focus states
- botões acessíveis
- formulários com labels
- suporte para leitores de ecrã

==================================================
21. ARQUITETURA DO CÓDIGO
==================================================

Manter o projeto organizado.

Criar componentes reutilizáveis.

Exemplo:

components/
  Navbar
  Hero
  About
  Menu
  MenuCategory
  MenuItem
  Gallery
  Reviews
  ReservationForm
  Location
  Contact
  Footer
  LanguageSwitcher
  ThemeToggle
  WhatsAppButton

data/
  menu
  translations
  restaurant

assets/
  images
  logo

Adaptar esta estrutura à arquitetura atual do projeto.

Não criar ficheiros desnecessários.

==================================================
22. CONFIGURAÇÃO
==================================================

Criar um local central onde eu possa alterar facilmente:

- nome
- morada
- telefone
- WhatsApp
- email
- Facebook
- horários
- Google Maps
- imagens
- logo

Não espalhar estas informações por dezenas de componentes.

==================================================
23. IMAGENS
==================================================

IMPORTANTE:

Eu vou fornecer posteriormente as fotografias reais do restaurante, pratos e logo.

Por isso, não construir o website dependente de imagens externas.

Criar placeholders organizados.

Deixar claro onde colocar:

logo
hero image
restaurant images
food images
gallery images

Quando eu adicionar as fotografias reais, o design deve continuar a funcionar sem alterações importantes.

==================================================
24. PERFORMANCE
==================================================

O website deve ser rápido.

- otimizar imagens
- lazy loading onde fizer sentido
- evitar bibliotecas desnecessárias
- evitar JavaScript desnecessário
- componentes eficientes
- boa performance mobile

==================================================
25. REGRAS IMPORTANTES
==================================================

NÃO INVENTAR informações sobre o restaurante.

NÃO inventar:
- avaliações
- prémios
- chefs
- nomes de proprietários
- preços
- horários diferentes
- serviços de delivery
- estacionamento
- história não fornecida

Quando faltar uma informação, criar um placeholder/configuração em vez de inventar.

Não utilizar Lorem Ipsum.

Todo o texto visível deve parecer conteúdo real de um restaurante.

O website deve parecer profissional e pronto para apresentar ao público.

==================================================
26. PRIMEIRA TAREFA
==================================================

ANTES DE IMPLEMENTAR:

1. Analisa o projeto atual.
2. Diz-me qual é a tecnologia utilizada.
3. Mostra a estrutura atual de pastas.
4. Identifica o que pode ser reutilizado.
5. Identifica o que precisa de ser criado ou alterado.
6. Propõe a arquitetura final.
7. Depois começa a implementação.

Não destruas o projeto existente.

Implementa de forma incremental e verifica erros depois de cada parte importante.

No final executa/verifica o projeto e corrige:
- erros de compilação
- imports
- TypeScript
- responsividade
- links
- problemas de layout
- problemas de acessibilidade.

O resultado deve ser um website profissional do Restaurante Paraxut, criado especialmente para atrair turistas que visitam Guimarães.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://paraxut-heritage-site.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/d6b8d593-eaac-458f-a784-3dc6e37201c2).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
