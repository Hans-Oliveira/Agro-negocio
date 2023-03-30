$( document ).ready(function() {
    info(localStorage.getItem('produto'));
});

/* function abrirModalAction() {
    $('#exampleModalCenter').modal('show'); 
} */


/*  */

$(".whats").click(function() {
    
    let produto = $(this).parents(".card").children(".card-body").children().text();

    let textWhatsapp = `Junio, Gostaria de saber um pouco mais sobre o porduto ${produto}, quantidades e valores`
    textWhatsapp = textWhatsapp.replace(/\s/g, "%20");

    window.location.href = `https://api.whatsapp.com/send?phone=5517997323133&text=${textWhatsapp}`;
});

$(".whats2").click(function() {

    let produto = $(this).parent().find('h2').text();

    let textWhatsapp = `Junio, Gostaria de saber um pouco mais sobre o porduto:  ${produto}, quantidades e valores`
    textWhatsapp = textWhatsapp.replace(/\s/g, "%20");

    window.location.href = `https://api.whatsapp.com/send?phone=5517997323133&text=${textWhatsapp}`;
    
});

$(".btn-outline-dark").click(function() {
    localStorage.setItem('produto', $(this).attr('id'));  
});

function info(produto) {
    switch (produto) {
        case 'canaPlanta':
            $("#name").text('Foliar - Cana Planta');
            $("#description").text('Titanium Cana Planta é um fertilizante foliar que fornece com eficiência nitrogênio, manganês, zinco, boro e cobre a base de sulfatos, juntamente com molibdênio, aditivado com aminoácidos selecionados para fase vegetativa');
            $("#image").attr('src', 'https://www.gruposolorico.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/m/o/mockup_titanium_cana_planta.jpg')
        break;
        case 'foliarCafe':
            $("#name").text('Foliar - Café');
            $("#description").text('Titanium Café é um composto nutricional que fornece macro e micronutrientes para aplicação foliar na cultura do cafeeiro.');
            $("#image").attr('src', 'https://www.gruposolorico.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/m/o/mockup_cafe.jpg')
        break;
        case 'foliarBoro':
            $("#name").text('Foliar - Boro 10');
            $("#description").text('Titanium Boro (Boro 10%) é um fertilizante foliar que possui alta concentração de boro.');
            $("#image").attr('src', 'https://www.gruposolorico.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/m/o/mockup_boro10.jpg')
        break;
        case 'titaniumPastagem':
            $("#name").text('Titanium - Pastagem');
            $("#description").text('Titanium Pastagem é um fertilizante de alta produtividade que atua no metabolismo das plantas.');
            $("#image").attr('src', 'https://www.gruposolorico.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/m/o/mockup_pastagem_1.jpg')
        break;
        case 'titaniumNitro':
            $("#name").text('Foliar - Titanium Nitro');
            $("#description").text('Titanium Nitro 30% é um fertilizante líquido, com máxima concentração de nitrogênio complexado com aminoácidos, que proporciona grande aporte desse nutriente em pequenas doses em uso foliar.');
            $("#image").attr('src', 'https://www.gruposolorico.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/m/o/mockup_nitro.jpg')
        break;
        case 'titaniumNpk':
            $("#name").text('Sollus - Titanium NPK');
            $("#description").text('É um fertilizante de alta produtividade que atua no metabolismo das plantas.');
            $("#image").attr('src', 'https://www.gruposolorico.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/m/o/mockup_titanium_npk.jpg')
        break;
        case 'titaniumGel':
            $("#name").text('Sollus - Titanium Gel');
            $("#description").text('Gel de Plantio - Sollus - Titanium Gel é um condicionador de solo que, incorporado ao solo ou substrato, absorve e retém grandes quantidades de água e de elementos fertilizantes.');
            $("#image").attr('src', 'https://www.gruposolorico.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/s/a/saco_25kg_gel.jpg')
        break;
        case 'topFix':
            $("#name").text('Action - Top Fix');
            $("#description").text('Action Top Fix é um produto que diminui a quebra e o respingamento de microgotas no impacto sobre a folha, reduzindo, em mais de 15 vezes, a velocidade de retração das gotas no impacto. ');
            $("#image").attr('src', 'https://www.gruposolorico.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/m/o/moxkup_action_top_fix.jpg')
        break;
        case 'expand':
            $("#name").text('Action - Expand');
            $("#description").text('ACTION EXPAND é um fertilizante desenvolvido para aplicações aéreas, com intuíto de impedir perdas através de deriva, escorrimento e facilitando a homogeneização da calda, evitando que a planta interrompa seu processo de fotossíntese.');
            $("#image").attr('src', 'https://www.gruposolorico.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/m/o/mockup_action_expand.jpg')
        break;
        case 'proLimp':
            $("#name").text('Action - Pró Limp');
            $("#description").text('Adjuvante composto por solventes orgânicos, desnaturantes, quelantes e alcaloides, que tem a função de agente limpante para circuitos de pulverização agrícola, fertirrigação e seus componentes e conexões. Action PRÓ LIMP apresenta excelente ação de limpeza dos circuitos de pulverização e fertirrigação diminuindo consideravelmente o risco de contaminação das caldas por resíduos de produtos remanescentes, evitando assim a ocorrência de fitotoxidez nas próximas aplicações.');
            $("#image").attr('src', 'https://www.gruposolorico.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/p/r/pro_limp_kit.jpg')
        break;
        case 'topOrange':
            $("#name").text('Action - Top Orange');
            $("#description").text('Contém óleo vegetal que age como agente ante evaporante e protetivo das gotas de pulverização e estabilizantes polímero vegetal que equilibra e potencializa a ação do produto e suas aplicações. Action Top Orange diminui a tensão superficial das gotas, melhorando a distribuição nas folhas, acobertura do limbo foliar e consequentemente aumentando a eficiência da absorção dos nutrientes.');
            $("#image").attr('src', 'https://www.gruposolorico.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/t/o/top_orange_kit.jpg')
        break;
        case 'impact':
            $("#name").text('Action - Impact');
            $("#description").text('Fertilizante foliar que oferece cobre e boro, com­plexados, quelatizados e adi­tivados especiais.');
            $("#image").attr('src', 'https://www.gruposolorico.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/m/o/mockup_impact.jpg')
        break;
        case 'topFixPlus':
            $("#name").text('Action - Top Fix Plus');
            $("#description").text('Action Top Fix Plus diminui a quebra e o respingamento de micro gotas no impacto sobre a folha, reduzindo, assim, em mais de 15 vezes a velocidade de retração das gotas no impacto.');
            $("#image").attr('src', 'https://www.gruposolorico.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/m/o/mockup_action_topflix_plus.jpg')
        break;
        case 'proCalda':
            $("#name").text('Action - Pró Calda');
            $("#description").text('Action Pró Calda é um fertilizante foliar com formula balanceada em Zinco e Manganês. Contêm em sua formulação, aditivos especiais, com alto poder para neutralização de reações antagônicas nas caldas de pulverizações. ');
            $("#image").attr('src', 'https://www.gruposolorico.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/a/c/action_pro_calda_mockup_geral.jpg')
        break;
        case 'energy':
            $("#name").text('Action - Energy');
            $("#description").text('Action Energy (Cálcio 1% e Magnésio 0,5%) é um fertilizante bioativo que participa no metabolismo da planta, aumentando sua performance e absorvendo maior quantidade de macro e micronutrientes.');
            $("#image").attr('src', 'https://www.gruposolorico.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/m/o/mockup_geral.jpg')
        break;
        case 'topSil':
            $("#name").text('Action - Top Sil');
            $("#description").text('Action Top Sil (Manganês 4,9%, Zinco 0,1%) é um produto siliconado que atua visando melhorar a cobertura da aplicação sobre a epiderme da folha, quebrando a tensão superficial da gota.');
            $("#image").attr('src', 'https://www.gruposolorico.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/k/i/kit_1.jpg')
        break;
        case 'titaniumCalcioFeril':
            $("#name").text('Foliar - Titanium Calcio Fertil');
            $("#description").text('Cálcio é um fertilizante Mineral Foliar e Fert Irrigação (Gotejo) para o suprimento de Cálcio às plantas. Enriquecido com Aminoácidos Nobres, permite rápida absorção do nutriente Cálcio.');
            $("#image").attr('src', 'https://www.gruposolorico.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/m/o/mockup_sollus_calcio_fertil.jpg')
        break;
        case 'titaniumGrown':
            $("#name").text('Foliar - Titanium Grown');
            $("#description").text('Fertilizante foliar e Ferti Irrigação (gotejo). Contém, bioestimulantes (Aminoácidos, hormônios vegetais e indutores de resistência), essenciais para o maior crescimento e enchimento de grãos e frutos.');
            $("#image").attr('src', 'https://www.gruposolorico.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/m/o/mockup-20l_20_6.jpg')
        break;
        case 'titaniumP':
            $("#name").text('Foliar - Titanium P30');
            $("#description").text('Titanium P30 é um composto nutricional, desenvolvido para o fornecimento de Fósforo via foliar.');
            $("#image").attr('src', 'https://www.gruposolorico.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/m/o/mockup_titanium_p30_2.jpg')
        break;
        case 'titaniumCanaSoca':
            $("#name").text('Foliar - Titanium Cana Soca');
            $("#description").text('Titanium Cana Soca é um fertilizante foliar que fornece com eficiência manganês, zinco, boro e cobre a base de sulfatos, juntamente com molibdênio, aditivado com aminoácidos selecionados para fase vegetativa.');
            $("#image").attr('src', 'https://www.gruposolorico.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/m/o/mockup_titanium_cana_soca.jpg')
        break;
        case 'titaniumMolibidenio':
            $("#name").text('Foliar - Titanium Molibidênio 8%');
            $("#description").text('Titanium Molibdênio é um fertilizante foliar indicado para pulverização e tratamento de sementes, fornecendo Molibdênio para as mais variadas culturas.');
            $("#image").attr('src', 'https://www.gruposolorico.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/m/o/molib_kit.jpg')
        break;
        case 'titaniumCacau':
            $("#name").text('Foliar - Titanium Cacau');
            $("#description").text('Composto nutricional que fornece macro e micronutrientes para aplicação foliar na cultura do cacau, possui alta solubilidade e é de fácil manuseio.');
            $("#image").attr('src', 'https://www.gruposolorico.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/k/i/kit_9_1.jpg')
        break;
        case 'titaniumZinco':
            $("#name").text('Foliar - Titanium Zinco 16%');
            $("#description").text('TITANIUM ZINCO é um fertilizante foliar quelatizado, de alta solubilidade, que proporciona a máxima absorção do Zinco. Quelatos são compostos estáveis, onde reações de precipitação ou incompatibilidade no tanque de pulverização são evitadas, favorecendo o maior aproveitamento do nutriente.');
            $("#image").attr('src', 'https://www.gruposolorico.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/k/i/kit_6.jpg')
        break;
        case 'titaniumMagnesio':
            $("#name").text('Foliar - Titanium Magnésio 8,5%');
            $("#description").text('MAGNÉSIO 8,5% é um fertilizante foliar, indicado para o fornecimento do Magnésio em diversas culturas.');
            $("#image").attr('src', 'https://www.gruposolorico.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/m/o/mockup_magnesio_8_5.jpg')
        break;
        case 'titaniumEnraizador':
            $("#name").text('Foliar - Titanium Enraizador');
            $("#description").text('Produto destinado a implantação de jardins, transplantes, produção de mudas, estaquia, alporquia, divisão de touceiras ou qualquer trato cultural que necessite favorecer a formação de raízes.');
            $("#image").attr('src', 'https://www.gruposolorico.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/k/i/kit_3.jpg')
        break;
        case 'superMIx':
            $("#name").text('Foliar - Super Mix');
            $("#description").text('Titanium Super Mix é um fertilizante com formulação de micronutrientes e aminoácidos, para nutrir as plantas sem adição de nitrogênio e principalmente no tomate envarado.');
            $("#image").attr('src', 'https://www.gruposolorico.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/s/u/super_mix_kit.jpg')
        break;
        case 'superFishPotassio':
            $("#name").text('Foliar - Super Fish Potássio 22%');
            $("#description").text('Titanium Super Fish Potássio 22% é um fertilizante foliar com altíssimo teor de solubilidade e ótima concentração de potássio e aminoácidos.');
            $("#image").attr('src', 'https://www.gruposolorico.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/m/o/mockup_super_fish_potassio_22.jpg')
        break;
        case 'superFish':
            $("#name").text('Foliar - Super Fish');
            $("#description").text('Titanium Super Fish (Ca 1% – Mg 0,5%) é um fertilizante foliar à base de aminoácidos livres, criado especialmente para atender às deficiências em fases específicas da planta.');
            $("#image").attr('src', 'https://www.gruposolorico.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/m/o/mockup_super_fish_1.jpg')
        break;
        case 'npkPlus':
            $("#name").text('Foliar - NPK Plus');
            $("#description").text('Titanium Sollus NPK PLUS é um fertilizante de alta produtividade que atua no metabolismo das plantas');
            $("#image").attr('src', 'https://www.gruposolorico.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/m/o/mockup_npk_plus_1.jpg')
        break;
        case 'titaniumPremiumZinco':
            $("#name").text('Foliar - Titanium Premium Zinco');
            $("#description").text('Titanium Premium Zinco (Zn 13% – N 10%) é um fertilizante foliar altamente concentrado para as mais diversas culturas.');
            $("#image").attr('src', 'https://www.gruposolorico.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/k/i/kit_5.jpg')
        break;
        case 'nitroEnxofre':
            $("#name").text('Foliar - Nitro Enxofre');
            $("#description").text('Titanium Nitro Enxofre (N 10% e S 6%) é um produto desenvolvido com nitrogênio, enxofre e aminoácidos, visando suprir as necessidades destes elementos nas fases em que as plantas mais precisam');
            $("#image").attr('src', 'https://www.gruposolorico.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/k/i/kit_4.jpg')
        break;
        case 'manganes':
            $("#name").text('Foliar - Manganês 11%');
            $("#description").text('Titanium Manganês (aminoácidos 5% e Manganês 11%) é um fertilizante à base de manganês e aminoácidos muito eficiente e versátil, que pode ser usado para suprir as deficiências de manganês.');
            $("#image").attr('src', 'https://www.gruposolorico.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/m/o/mockup_manganes_11.jpg')
        break;
        case 'titaniumKCarbonato':
            $("#name").text('Foliar - Titanium K Carbonato');
            $("#description").text('Titanium K Carbonato (Carbonato de Potássio K34%) é um fertilizante foliar com altíssimo teor de solubilidade e, por conter alta concentração de potássio.');
            $("#image").attr('src', 'https://www.gruposolorico.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/m/o/mockup_titanium_k_carbonato.jpg')
        break;
        case 'flowerPlus':
            $("#name").text('Foliar - Flower Plus');
            $("#description").text('Titanium Flower Plus (Cálcio, Magnésio e Boro) é um fertilizante foliar líquido, composto à base de cálcio, magnésio e boro.');
            $("#image").attr('src', 'https://www.gruposolorico.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/f/l/flower_kit.jpg')
        break;
        case 'titaniumCompleto':
            $("#name").text('Foliar - Titanium Completo');
            $("#description").text('Titanium Completo (N 5%, P2O5 8%, K2O5 5%, Ca 0,6%, Mg 0,04%, B 0,04%, Cu 0,05%, Mn 0,5%, Zn 1%, Aminoácido 14%) é um fertilizante que participa no metabolismo da planta, aumentando sua performance e absorvendo maior quantidade de macro e micronutrientes.');
            $("#image").attr('src', 'https://www.gruposolorico.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/m/o/mockup_completo100ml.jpg')
        break;
        case 'cobre':
            $("#name").text('Foliar - Cobre 7%');
            $("#description").text('Titanium Cobre é um composto nutricional para aplicação foliar, indicado no cultivo de lavouras de interesse econômico, com o intuito de fornecer e equilibrar estas culturas em Cobre.');
            $("#image").attr('src', 'https://www.gruposolorico.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/k/i/kit_2.jpg')
        break;
        case 'floresSuperFish':
            $("#name").text('Flores e Jardim - Super Fish');
            $("#description").text('Cada frasco contém 100ml. Compra mínima de 35 frascos');
            $("#image").attr('src', 'https://www.gruposolorico.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/s/u/super-fish_1.jpg')
        break;
        case 'bonsai':
            $("#name").text('Flores e Jardim - Bonsai');
            $("#description").text('Cada frasco contém 100ml. Compra mínima de 35 frascos');
            $("#image").attr('src', 'https://www.gruposolorico.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/b/o/bonsai.jpg')
        break;
        case 'floresCobre':
            $("#name").text('Flores e Jardim - Cobre');
            $("#description").text('Cada frasco contém 100ml. Compra mínima de 35 frascos.');
            $("#image").attr('src', 'https://www.gruposolorico.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/c/o/cobre_1.jpg')
        break;
        case 'violetas':
            $("#name").text('Flores e Jardim - Violetas');
            $("#description").text('Cada frasco contém 100ml. Compra mínima de 35 frascos.');
            $("#image").attr('src', 'https://www.gruposolorico.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/v/i/violetas.jpg')
        break;
        case 'rosaDeserto':
            $("#name").text('Flores e Jardim - Rosa do Deserto');
            $("#description").text('Cada frasco contém 100ml. Compra mínima de 35 frascos');
            $("#image").attr('src', 'https://www.gruposolorico.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/r/o/rosas-do-desertos.jpg')
        break;
        case 'cactus':
            $("#name").text('Flores e Jardim - Cactus');
            $("#description").text('Cada frasco contém 100ml. Compra mínima de 35 frascos.');
            $("#image").attr('src', 'https://www.gruposolorico.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/c/a/cactus.jpg')
        break;
        case 'orquideasManutencao':
            $("#name").text('Flores e Jardim - Orquídeas Manutenção');
            $("#description").text('Cada frasco contém 100ml. Compra mínima de 35 frascos.');
            $("#image").attr('src', 'https://www.gruposolorico.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/o/r/orquideas-manutencao.jpg')
        break;
        case 'orquideasFloracao':
            $("#name").text('Flores e Jardim - Orquídeas Floração');
            $("#description").text('Cada frasco contém 100ml. Compra mínima de 35 frascos.');
            $("#image").attr('src', 'https://www.gruposolorico.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/o/r/orquideas-floracao.jpg')
        break;
        case 'floresEnraizador':
            $("#name").text('Flores e Jardim - Enraizador');
            $("#description").text('Cada frasco contém 100ml. Compra mínima de 35 frascos.');
            $("#image").attr('src', 'https://www.gruposolorico.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/e/n/enraizador_1.jpg')
        break;
        case 'floresEquilibrio':
            $("#name").text('Flores e Jardim - Equilíbrio');
            $("#description").text('Cada frasco contém 100ml. Compra mínima de 35 frascos.');
            $("#image").attr('src', 'https://www.gruposolorico.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/e/q/equilibrio.jpg')
        break;
        case 'paredeVerde':
            $("#name").text('Flores e Jardim - Parede Verde');
            $("#description").text('Cada frasco contém 100ml. Compra mínima de 35 frascos.');
            $("#image").attr('src', 'https://www.gruposolorico.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/p/a/parede-verde.jpg')
        break;
        case 'comboGramineas':
            $("#name").text('COMBO COBERTURA EM MILHO E DEMAIS GRAMINEAS');
            $("#description").text('Melhor desenvolvimento inicial, grãos mais pesados e sadios. Planta com maior nível de nutrição, suportando mais as enfermidades e aos fatores abióticos e bióticos provocado pelo clima e tratos culturais. Nutrição completa com vários nutrientes como Zinco, enxofre, alta concentração de macro e com investimento por hectare menor que utilizando somente ureia branca (nitrogênio) Obs : Aproveite e adicione em seu carrinho de compras o Gel de plantio (não esta incluso neste combo abaixo)');
            $("#image").attr('src', 'https://www.gruposolorico.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/c/o/cobertura-em-milho-e-demais-gramineas.png')
        break;
        case 'comboFoliar':
            $("#name").text('COMBO FRUTÍFERAS FOLIAR');
            $("#description").text('Este combo é ideal para ter plantas com maior sanidade, frutos com maior peso e melhor brix (sabor) diferenciados. Melhor qualidade da floração e pegamento de frutos, consequentemente aumento da produtividade.');
            $("#image").attr('src', 'https://www.gruposolorico.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/f/r/frutiferas-foliar.png')
        break;
        case 'comboPastagem':
            $("#name").text('COMBO RECUPERAÇÃO PASTAGEM');
            $("#description").text('Recupere e fortaleça sua pastagem, aumentando a quantidade de animal por área, suportando maior o pisoteio, rebrota da pastagem com mais vigor. Pastagem com alto padrão. Animal mais nutrido diminui o consumo de sal, maior facho de pastagem na seca, diminuindo o tempo de trato na durante estes períodos. Investimento Hectare, media de R$ 685,00 reais, adubação completa e não apenas nitrogênio como a ureia.');
            $("#image").attr('src', 'https://www.gruposolorico.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/r/e/recupera_o-de-pastagem.png')
        break;
        case 'supremoBF':
            $("#name").text('Protect - Supremo BF');
            $("#description").text('Protect SUPREMO BF é um biofertilizante que devido a combinação de elementos (micronutrientes), aminoácidos específicos e carbono orgânico com aditivos especiais é um ativador e potencializador fisiológico');
            $("#image").attr('src', 'https://www.gruposolorico.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/s/u/supremo_bf_kit.jpg')
        break;
        case 'protectFlor':
            $("#name").text('Protect - Flor');
            $("#description").text('PROTECT FLOR é um fertilizante que devido a sua combinação de elementos, micronutrientes e aminoácidos específicos, carbono orgânico, aditivos especiais, conseguimos fazer a indução da floração de todas as culturas, em frutíferas principalmente.');
            $("#image").attr('src', 'https://www.gruposolorico.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/f/l/flor_kit.jpg')
        break;
        case 'biocrop':
            $("#name").text('Protect - Biocrop');
            $("#description").text('Produto que na sua formulação com macro e micronutrientes combinados com extratos de algas marinhas (Ascophyllum Nodusum), proporcionam uma melhoria em diversos processos metabólicos e fisiológicos das plantas. ');
            $("#image").attr('src', 'https://www.gruposolorico.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/k/i/kit_6_1.jpg')
        break;
        case 'protectEvolution':
            $("#name").text('Protect - Evolution');
            $("#description").text('O Evolution é um fertilizante fisiológico que contem nutrientes e substâncias orgânicas capazes de ativar e estimular atividade metabólica e sistema de defesa natural das plantas, agindo nutricionalmente e fisiologicamente contra estresses causados por pragas, doenças e também pelo clima. Induzindo genes de resistência das plantas na maior produção de proteínas PR (proteínas resistentes a patogenicidade).');
            $("#image").attr('src', 'https://www.gruposolorico.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/k/i/kit_7.jpg')
        break;
        case 'fosfito':
            $("#name").text('Protect - Fosfito');
            $("#description").text('Protect Fosfito é um fertilizante que auxilia a proteção natural das plantas. ');
            $("#image").attr('src', 'https://www.gruposolorico.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/s/o/solo_rico_fosfito_de_pot_ssio_145x228_5_1_2_.jpg')
        break;
        case 'florada':
            $("#name").text('Protect - Florada');
            $("#description").text('Protect florada é um fertilizante que auxilia na floração e frutificação.');
            $("#image").attr('src', 'https://www.gruposolorico.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/m/o/mockup_protect_florada_1.jpg')
        break;
        case 'silimax':
            $("#name").text('Protect - Silimax');
            $("#description").text('Protect Silimax (Ca 5,8%, Mg 1,2%,S 1,3%, Cu 3%, Si 10%) é um fertilizante natural que auxilia a proteção natural das plantas. ');
            $("#image").attr('src', 'https://www.gruposolorico.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/m/o/mockup_silimax_1.jpg')
        break;
        case 'silifol':
            $("#name").text('Protect - Silifol');
            $("#description").text('Protect Silifol (K2O 12%; Si 12%) é um fertilizante natural simples que contém em sua formulação silício e potássio.');
            $("#image").attr('src', 'https://www.gruposolorico.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/k/i/kit.jpg')
        break;
        case 'leonardita':
            $("#name").text('Leonardita');
            $("#description").text('Ácidos Húmicos e Fúlvicos. Contém Algas Marinhas. Alto teor de carbono orgânico (30%). Rico em Ácidos Húmicos (65%) e Fúlvicos (22,8%). Rico em Nutrientes (N, K, S, Ca, Mg, Fe, Zn, Mn)');
            $("#image").attr('src', 'https://www.gruposolorico.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/m/o/mockup_caixas_leonardita_solorico.jpg')
        break;
        case 'sollusEnxofre':
            $("#name").text('Sollus - Titanium Enxofre');
            $("#description").text('O enxofre é o quarto nutriente mais usado pelas plantas, ficando atrás somente do nitrogênio, do fósforo e do potássio. Ele atua, entre outras coisas, na composição de dois importantes aminoácidos: cistina e metionina, que realizam a síntese de proteínas, ajudando na produção e enchimento de grãos, na produção de clorofila e na nodulação de leguminosas. ');
            $("#image").attr('src', 'https://www.gruposolorico.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/k/i/kit_8.jpg')
        break;
        case 'nitroK':
            $("#name").text('Sollus - Titanium Nitro K');
            $("#description").text('Fertilizante líquido, totalmente solúvel em água para aplicação solo e foliar. A formulação contém nitrogênio e potássio nutrientes essenciais ao desenvolvimento e crescimento das plantas. As aplicações são direcionadas para prevenção e/ou manutenção do estado nutricional, e para correção das deficiências destes elementos nas diversas culturas.');
            $("#image").attr('src', 'https://www.gruposolorico.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/m/o/mockup_nitro_k_1.jpg')
        break;
        case 'titaniumKs':
            $("#name").text('Sollus - Titanium KS');
            $("#description").text('Fertilizantes foliar com macro e micronutrientes desenvolvidos com matéria-prima de alta qualidade, visando o equilíbrio nutricional das plantas e um melhor aproveitamento dos minerais. Fertilizante totalmente solúveis em água, possuindo nutrientes prontamente disponíveis com elevada eficiência na absorção foliar e assimilação pela planta. Sua formulação balanceada complementa as necessidades nutricionais da lavoura.');
            $("#image").attr('src', 'https://www.gruposolorico.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/k/s/ks_kit.jpg')
        break;
        case 'sollusAlgas':
            $("#name").text('Sollus - Titanium FH + ALGAS');
            $("#description").text('Produto com formulação composta entre Algas Marinhas (Ascophillum Nodusum), Aminoácidos e Ácidos Húmicos e Fúlvicos, na forma liquida.');
            $("#image").attr('src', 'https://www.gruposolorico.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/k/i/kit_9.jpg')
        break;
        case 'sollusPlastertec':
            $("#name").text('Sollus - Titanium Plastertec');
            $("#description").text('É um fertilizante fluído que contém elevadas quantidades de enxofre e cálcio.');
            $("#image").attr('src', 'https://www.gruposolorico.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/m/o/mockup_plastertec_1.jpg')
        break;
        case 'sollusFh':
            $("#name").text('Sollus - Titanium FH');
            $("#description").text('É um fertilizante fluído para uso via solo, além de ser fonte concentrada de ácidos húmicos e fúlvicos, derivados de Leonardita australiana.');
            $("#image").attr('src', 'https://www.gruposolorico.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/m/o/mockup_fh100ml.jpg')
        break;
        case 'sollusCalcitec':
            $("#name").text('Sollus - Titanium Calcitec');
            $("#description").text('É um fertilizante fluído, de alta concentração, para uso via solo. Pode ser utilizado em diversas culturas que necessitem de cálcio e magnésio para melhor desempenho.');
            $("#image").attr('src', 'https://www.gruposolorico.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/m/o/mockup_calcitec_100ml.jpg')
        break;
        case 'sollusCalcio':
            $("#name").text('Sollus - Titanium Cálcio 25%');
            $("#description").text('É um fertilizante fluído que contém cálcio à base de carbonato, resultado da mais alta tecnologia de fabricação de fertilizantes líquidos.');
            $("#image").attr('src', 'https://www.gruposolorico.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/m/o/mockup_calcio25.jpg')
        break;
        /* case '':
            $("#name").text('');
            $("#description").text('');
            $("#image").attr('src', '')
        break;
        case '':
            $("#name").text('');
            $("#description").text('');
            $("#image").attr('src', '')
        break;
        case '':
            $("#name").text('');
            $("#description").text('');
            $("#image").attr('src', '')
        break;
        case '':
            $("#name").text('');
            $("#description").text('');
            $("#image").attr('src', '')
        break;
        case '':
            $("#name").text('');
            $("#description").text('');
            $("#image").attr('src', '')
        break;
        case '':
            $("#name").text('');
            $("#description").text('');
            $("#image").attr('src', '')
        break;
        case '':
            $("#name").text('');
            $("#description").text('');
            $("#image").attr('src', '')
        break;
        case '':
            $("#name").text('');
            $("#description").text('');
            $("#image").attr('src', '')
        break;
        case '':
            $("#name").text('');
            $("#description").text('');
            $("#image").attr('src', '')
        break;
        case '':
            $("#name").text('');
            $("#description").text('');
            $("#image").attr('src', '')
        break;
        case '':
            $("#name").text('');
            $("#description").text('');
            $("#image").attr('src', '')
        break;
        case '':
            $("#name").text('');
            $("#description").text('');
            $("#image").attr('src', '')
        break;
        case '':
            $("#name").text('');
            $("#description").text('');
            $("#image").attr('src', '')
        break;
        case '':
            $("#name").text('');
            $("#description").text('');
            $("#image").attr('src', '')
        break;
        case '':
            $("#name").text('');
            $("#description").text('');
            $("#image").attr('src', '')
        break;
        case '':
            $("#name").text('');
            $("#description").text('');
            $("#image").attr('src', '')
        break;
        case '':
            $("#name").text('');
            $("#description").text('');
            $("#image").attr('src', '')
        break;
        case '':
            $("#name").text('');
            $("#description").text('');
            $("#image").attr('src', '')
        break;
        case '':
            $("#name").text('');
            $("#description").text('');
            $("#image").attr('src', '')
        break;
        case '':
            $("#name").text('');
            $("#description").text('');
            $("#image").attr('src', '')
        break;
        case '':
            $("#name").text('');
            $("#description").text('');
            $("#image").attr('src', '')
        break;
        case '':
            $("#name").text('');
            $("#description").text('');
            $("#image").attr('src', '')
        break;
        case '':
            $("#name").text('');
            $("#description").text('');
            $("#image").attr('src', '')
        break;
        case '':
            $("#name").text('');
            $("#description").text('');
            $("#image").attr('src', '')
        break;
        case '':
            $("#name").text('');
            $("#description").text('');
            $("#image").attr('src', '')
        break;
        case '':
            $("#name").text('');
            $("#description").text('');
            $("#image").attr('src', '')
        break;
        case '':
            $("#name").text('');
            $("#description").text('');
            $("#image").attr('src', '')
        break;
        case '':
            $("#name").text('');
            $("#description").text('');
            $("#image").attr('src', '')
        break;
        case '':
            $("#name").text('');
            $("#description").text('');
            $("#image").attr('src', '')
        break;
        case '':
            $("#name").text('');
            $("#description").text('');
            $("#image").attr('src', '')
        break;
        case '':
            $("#name").text('');
            $("#description").text('');
            $("#image").attr('src', '')
        break;
        case '':
            $("#name").text('');
            $("#description").text('');
            $("#image").attr('src', '')
        break;
        case '':
            $("#name").text('');
            $("#description").text('');
            $("#image").attr('src', '')
        break;
        case '':
            $("#name").text('');
            $("#description").text('');
            $("#image").attr('src', '')
        break;
        case '':
            $("#name").text('');
            $("#description").text('');
            $("#image").attr('src', '')
        break;
        case '':
            $("#name").text('');
            $("#description").text('');
            $("#image").attr('src', '')
        break;
        case '':
            $("#name").text('');
            $("#description").text('');
            $("#image").attr('src', '')
        break;
        case '':
            $("#name").text('');
            $("#description").text('');
            $("#image").attr('src', '')
        break;
        case '':
            $("#name").text('');
            $("#description").text('');
            $("#image").attr('src', '')
        break;
        case '':
            $("#name").text('');
            $("#description").text('');
            $("#image").attr('src', '')
        break;
        case '':
            $("#name").text('');
            $("#description").text('');
            $("#image").attr('src', '')
        break;
        case '':
            $("#name").text('');
            $("#description").text('');
            $("#image").attr('src', '')
        break;
        case '':
            $("#name").text('');
            $("#description").text('');
            $("#image").attr('src', '')
        break;
        case '':
            $("#name").text('');
            $("#description").text('');
            $("#image").attr('src', '')
        break;
        case '':
            $("#name").text('');
            $("#description").text('');
            $("#image").attr('src', '')
        break;
        case '':
            $("#name").text('');
            $("#description").text('');
            $("#image").attr('src', '')
        break;
        case '':
            $("#name").text('');
            $("#description").text('');
            $("#image").attr('src', '')
        break;
        case '':
            $("#name").text('');
            $("#description").text('');
            $("#image").attr('src', '')
        break;
        case '':
            $("#name").text('');
            $("#description").text('');
            $("#image").attr('src', '')
        break;
        case '':
            $("#name").text('');
            $("#description").text('');
            $("#image").attr('src', '')
        break;
        case '':
            $("#name").text('');
            $("#description").text('');
            $("#image").attr('src', '')
        break;
        case '':
            $("#name").text('');
            $("#description").text('');
            $("#image").attr('src', '')
        break;
        case '':
            $("#name").text('');
            $("#description").text('');
            $("#image").attr('src', '')
        break;
        case '':
            $("#name").text('');
            $("#description").text('');
            $("#image").attr('src', '')
        break;
        case '':
            $("#name").text('');
            $("#description").text('');
            $("#image").attr('src', '')
        break; */
    }
}