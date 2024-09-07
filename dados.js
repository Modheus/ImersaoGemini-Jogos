let jogos = [
  {
    titulo: "Persona 5",
    imagem : "https://upload.wikimedia.org/wikipedia/pt/5/52/Persona_5_capa.jpg", 
    descricao: "Persona 5 é um RPG japonês que acompanha um grupo de estudantes do ensino médio que adquirem poderes sobrenaturais para entrar no 'Metaverso', um reino paralelo que representa os corações distorcidos das pessoas. Nessa realidade, os protagonistas, conhecidos como Phantom Thieves, exploram os 'Palácios', representações físicas das mentes corrompidas, para mudar os corações das pessoas e expor seus crimes. Com uma estética visual vibrante, trilha sonora marcante e uma narrativa envolvente que aborda temas como justiça, liberdade e a natureza da identidade, Persona 5 oferece uma experiência única, combinando elementos de vida escolar, exploração de dungeons e combates por turnos estratégicos.",
    plataformas: "PlayStation 3, PlayStation 4, PlayStation 5, Xbox Series X/S, Microsoft Windows",
    anoLancamento: 2016,
    linkWikipedia: "https://pt.wikipedia.org/wiki/Persona_5"
  },
  {
    titulo: "Terraria",
    imagem : "https://upload.wikimedia.org/wikipedia/pt/thumb/e/ee/Terraria_capa.png/300px-Terraria_capa.png",
    descricao: "Terraria é um jogo de ação e aventura em 2D que combina elementos de construção, exploração e combate em um mundo gerado proceduralmente. O jogador pode cavar, lutar e construir, criando desde abrigos simples até fortalezas elaboradas. O mundo oferece uma grande variedade de biomas e inimigos desafiadores, com chefões épicos que requerem habilidades e estratégias únicas para serem derrotados. Além disso, Terraria permite jogar em modos cooperativos ou competitivos com outros jogadores, tornando a experiência ainda mais rica. Os gráficos pixelados, inspirados em jogos clássicos, contribuem para o charme e nostalgia do jogo.",
    plataformas: "Microsoft Windows, macOS, Linux, PlayStation 3, PlayStation 4, PlayStation Vita, Xbox 360, Xbox One, Nintendo 3DS, Nintendo Switch, iOS, Android",
    anoLancamento: 2011,
    linkWikipedia: "https://pt.wikipedia.org/wiki/Terraria"
  },
  {
    titulo: "The Witcher 3: Wild Hunt",
    imagem : "https://upload.wikimedia.org/wikipedia/pt/0/06/TW3_Wild_Hunt.png",
    descricao: "The Witcher 3: Wild Hunt é um aclamado RPG de ação em mundo aberto, ambientado em um vasto universo de fantasia medieval. O jogador assume o papel de Geralt de Rivia, um caçador de monstros conhecido como bruxo, em busca de sua filha adotiva, Ciri, enquanto enfrenta diversas ameaças sobrenaturais e políticas. Com uma narrativa rica e complexa, escolhas morais significativas e combate estratégico, o jogo oferece uma experiência imersiva e profunda. Além disso, seus cenários detalhados, missões secundárias envolventes e trilha sonora épica consolidam The Witcher 3 como um dos melhores jogos de sua geração.",
    plataformas: "Microsoft Windows, PlayStation 4, Xbox One, Nintendo Switch",
    anoLancamento: 2015,
    linkWikipedia: "https://pt.wikipedia.org/wiki/The_Witcher_3:_Wild_Hunt"
  },
  {
    titulo: "Prey (2017)",
    imagem : "https://upload.wikimedia.org/wikipedia/pt/3/3c/Prey_2017_capa.png",
    descricao: "Prey é um jogo de tiro em primeira pessoa com elementos de RPG, lançado em 2017. O jogador assume o controle de Morgan Yu, que desperta em uma estação espacial chamada Talos I, infestada por uma misteriosa raça alienígena chamada Typhon. À medida que explora a estação, o jogador descobre segredos sobre a experiência que está acontecendo e adquire habilidades, tanto humanas quanto alienígenas, para sobreviver e combater a ameaça. Prey oferece uma narrativa envolvente com múltiplos finais, além de um sistema de progressão aberto que permite ao jogador abordar os desafios de diferentes maneiras.",
    plataformas: "Microsoft Windows, PlayStation 4, Xbox One",
    anoLancamento: 2017,
    linkWikipedia: "https://pt.wikipedia.org/wiki/Prey_(jogo_eletr%C3%B4nico_de_2017)"
  },
  {
    titulo: "Disco Elysium",
    imagem : "https://upload.wikimedia.org/wikipedia/pt/0/0d/Disco_Elysium_Poster.jpeg",
    descricao: "Disco Elysium é um RPG de investigação que se destaca pelo seu foco em diálogos e tomada de decisões. O jogador controla um detetive amnésico em uma cidade fictícia chamada Revachol, onde deve resolver um assassinato. As escolhas feitas durante os diálogos moldam o desenvolvimento do protagonista e a maneira como o mundo ao seu redor reage a ele. Sem combates tradicionais, o jogo foca em habilidades mentais e emocionais, com um enredo profundo que explora temas como política, identidade e moralidade. Sua narrativa densa e inovadora torna Disco Elysium uma experiência única e envolvente.",
    plataformas: "Microsoft Windows, macOS, Linux, PlayStation 4, Xbox One, Nintendo Switch",
    anoLancamento: 2019,
    linkWikipedia: "https://pt.wikipedia.org/wiki/Disco_Elysium"
  },
  {
    titulo: "Minecraft",
    imagem : "https://upload.wikimedia.org/wikipedia/pt/9/9c/Minecraft_capa.png",
    descricao: "Minecraft é um jogo de mundo aberto onde os jogadores podem explorar um mundo gerado aleatoriamente composto por blocos. Com infinitas possibilidades de criação, o jogador pode construir desde pequenas casas até gigantescas cidades, além de enfrentar inimigos durante a noite. O modo sobrevivência exige que o jogador colete recursos e enfrente desafios, enquanto o modo criativo permite total liberdade para construir e explorar. Com gráficos em estilo pixel art, Minecraft tornou-se um fenômeno cultural, sendo usado até em ambientes educacionais para promover a criatividade e a resolução de problemas.",
    plataformas: "Microsoft Windows, macOS, Linux, Android, iOS, PlayStation 3, PlayStation 4, PlayStation Vita, Xbox 360, Xbox One, Nintendo Switch, Nintendo Wii U",
    anoLancamento: 2011,
    linkWikipedia: "https://pt.wikipedia.org/wiki/Minecraft"
  },
  {
    titulo: "Final Fantasy XV",
    imagem : "https://upload.wikimedia.org/wikipedia/pt/d/d3/Final_Fantasy_XV_capa.png",
    descricao: "Final Fantasy XV é um RPG de ação em mundo aberto que segue a história de Noctis, o príncipe de Lucis, em sua jornada para salvar seu reino da ameaça do Império de Niflheim. Com combate dinâmico e em tempo real, o jogo combina exploração de um vasto mundo com missões envolventes e um sistema de progressão profundo. Além de suas mecânicas de jogo, o enredo emocionante e os laços entre os personagens centrais são elementos de destaque. Com gráficos impressionantes e uma trilha sonora marcante, Final Fantasy XV oferece uma experiência inesquecível.",
    plataformas: "PlayStation 4, Xbox One, Microsoft Windows",
    anoLancamento: 2016,
    linkWikipedia: "https://pt.wikipedia.org/wiki/Final_Fantasy_XV"
  },
  {
    titulo: "The Legend of Zelda: Breath of the Wild",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/0/0f/Legend_of_Zelda_Breath_of_the_Wild_capa.png",
    descricao: "The Legend of Zelda: Breath of the Wild é um jogo de ação e aventura que oferece uma experiência de mundo aberto vasta e repleta de liberdade. O jogador controla Link, que desperta de um sono profundo para explorar a vasta terra de Hyrule, enfrentando inimigos, resolvendo quebra-cabeças e descobrindo segredos. Com um sistema de física avançado e uma abordagem não linear, os jogadores podem explorar o mundo à sua maneira, abordando os desafios de múltiplas formas. O jogo recebeu aclamação por sua jogabilidade inovadora, design de mundo e liberdade de exploração.",
    plataformas: "Nintendo Switch, Wii U",
    anoLancamento: 2017,
    linkWikipedia: "https://pt.wikipedia.org/wiki/The_Legend_of_Zelda:_Breath_of_the_Wild"
  },
  {
    titulo: "Assassin's Creed Black Flag",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/c/ca/Assassins_Creed_4_Black_Flag_capa.png",
    descricao: "Assassin's Creed Black Flag é um jogo de ação e aventura ambientado na Era Dourada da Pirataria. O jogador assume o papel de Edward Kenway, um pirata que também se envolve na luta secreta entre Assassinos e Templários. Além das batalhas em terra, o jogo oferece combate naval inovador, permitindo que o jogador comande seu próprio navio e enfrente outros piratas no vasto Mar do Caribe. Com uma mistura de exploração, combate e furtividade, Black Flag é um dos títulos mais populares da franquia, oferecendo uma experiência rica e variada.",
    plataformas: "PlayStation 3, PlayStation 4, Xbox 360, Xbox One, Microsoft Windows",
    anoLancamento: 2013,
    linkWikipedia: "https://pt.wikipedia.org/wiki/Assassin's_Creed_Black_Flag"
  },
  {
    titulo: "God of War (2018)",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/thumb/8/82/God_of_War_2018_capa.png/405px-God_of_War_2018_capa.png",
    descricao: "God of War (2018) reinventa a série de ação, trazendo Kratos, o protagonista, para um novo cenário inspirado na mitologia nórdica. Agora acompanhado de seu filho, Atreus, Kratos embarca em uma jornada emocional que explora a relação entre pai e filho. O sistema de combate foi reformulado, oferecendo uma abordagem mais estratégica e visceral, com foco no uso do machado Leviathan. Além da ação intensa, o jogo apresenta uma narrativa envolvente, gráficos impressionantes e design de níveis que incentiva a exploração. God of War recebeu aclamação da crítica por sua profundidade emocional e inovações na jogabilidade.",
    plataformas: "PlayStation 4",
    anoLancamento: 2018,
    linkWikipedia: "https://pt.wikipedia.org/wiki/God_of_War_(jogo_eletr%C3%B4nico_de_2018)"
  }
];
