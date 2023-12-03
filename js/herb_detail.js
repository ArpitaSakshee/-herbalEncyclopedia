document.addEventListener('DOMContentLoaded', function () {
  const herbs = [
    {
      herbName: 'Ashwagandha',
      imageSrc: './img/1.png',
      tagline: 'The Stress Alleviator',
      briefIntro:
        'Enhance vitality and reduce stress with our Ashwagandha supplements.',
      price: '$10.99',
      description:
        "Ashwagandha, also known as Withania somnifera, is a powerful adaptogen that has been used for centuries in Ayurvedic medicine. It helps the body manage stress, improve concentration, and increase energy levels. This herb is also known to boost brain function, reduce blood sugar and cortisol levels, and help fight symptoms of anxiety and depression. It's believed to offer anti-cancer properties as well. Our Ashwagandha supplements are designed to provide a natural way to maintain balance and wellness in your life.",
    },
    {
      herbName: 'Turmeric',
      imageSrc: './img/2.png',
      tagline: 'The Golden Spice of Life',
      briefIntro:
        'Experience holistic wellness with our organic Turmeric powder.',
      price: '$8.45',
      description:
        'Turmeric, a root belonging to the ginger family, is not only a staple in culinary traditions but also a potent medicinal herb. Its active compound, curcumin, is known for powerful anti-inflammatory effects and is a strong antioxidant. Regular consumption of turmeric can contribute to improved brain function, lower risk of brain diseases, and significant benefits against heart disease. It may also aid in preventing and treating Alzheimer’s disease, cancer, and arthritis. Our turmeric powder brings the essence of this ancient wisdom right to your kitchen.',
    },
    {
      herbName: 'Brahmi',
      imageSrc: './img/3.png',
      tagline: 'The Mind Sharpener',
      briefIntro: 'Boost your brainpower with our pure Brahmi extract.',
      price: '$11.50',
      description:
        "Brahmi, scientifically known as Bacopa monnieri, is a staple herb in Ayurvedic medicine, famed for enhancing brain function. It's traditionally used for improving memory, reducing anxiety, and treating epilepsy. Studies suggest Brahmi may boost brain function, alleviate ADHD symptoms, prevent anxiety and stress, and increase dopamine and serotonin levels in the brain. It's also known for its antioxidant properties, protecting against cell damage caused by potentially harmful molecules called free radicals. Our Brahmi extract offers a natural way to enhance cognitive abilities and mental clarity.",
    },
    {
      herbName: 'Neem',
      imageSrc: './img/4.png',
      tagline: "Nature's Healing Touch",
      briefIntro: 'Discover the purifying benefits of our Neem products.',
      price: '$7.75',
      description:
        'Neem, or Azadirachta indica, is a tree native to the Indian subcontinent. It has been used for centuries in traditional medicine for its diverse healing properties. Neem leaves are known for their antibacterial, antifungal, and anti-inflammatory qualities, making them effective in treating skin conditions like acne, psoriasis, and eczema. The herb is also used in dental care products for its germ-killing properties, and as an insect repellent. Our Neem products offer a holistic approach to skin care, oral health, and natural insect control.',
    },
    {
      herbName: 'Triphala',
      imageSrc: './img/5.png',
      tagline: 'The Detoxifier',
      briefIntro: 'Cleanse and rejuvenate with our Triphala blend.',
      price: '$9.25',
      description:
        'Triphala, a cornerstone in Ayurvedic medicine, is a powerful herbal remedy consisting of three fruits: Amalaki, Bibhitaki, and Haritaki. This blend is known for its synergistic effects in promoting digestion and purification. Triphala is believed to gently cleanse and detoxify the body, while nourishing and rejuvenating the tissues. It is also used to support healthy respiratory, cardiovascular, urinary, reproductive, and nervous systems. This herb has potent anti-inflammatory, antioxidant, and immune-boosting properties, making it a versatile addition to your health regimen.',
    },
    {
      herbName: 'Chamomile',
      imageSrc: './img/6.png',
      tagline: 'Sip of Serenity',
      briefIntro: 'Unwind with our soothing Chamomile tea.',
      price: '$6.99',
      description:
        'Chamomile, known for its delicate flowers, is a popular herb for its calming and soothing properties. Widely used as a natural remedy for insomnia and anxiety, chamomile tea is a gentle sleep aid. It also offers anti-inflammatory, anti-bacterial, and liver-protecting effects. Chamomile can aid in digestive issues like gas, indigestion, and ulcers, and is used topically to soothe skin irritations. Its mild nature makes it suitable for all ages, providing a peaceful escape in every cup.',
    },
    {
      herbName: 'Amla',
      imageSrc: './img/7.png',
      tagline: 'The Vitamin C Powerhouse',
      briefIntro: 'Boost your immunity with our Amla products.',
      price: '$8.99',
      description:
        "Amla, or Indian gooseberry, is a superfruit rich in vitamin C, antioxidants, and fiber. It's known for its immunity-boosting and rejuvenating properties. Amla is beneficial for skin and hair health, improving complexion and reducing hair fall. It aids in digestion, helps manage chronic conditions like diabetes, and enhances heart health. Amla is also used in traditional practices to improve eyesight and relieve inflammation. Our range of Amla products offers a natural and potent source of daily health and vitality.",
    },
    {
      herbName: 'Tulsi',
      imageSrc: './img/8.png',
      tagline: 'The Holy Basil',
      briefIntro: 'Experience the spiritual and health benefits of Tulsi.',
      price: '$9.50',
      description:
        "Tulsi, also known as Holy Basil, is revered as a sacred plant in India and is a cornerstone in Ayurvedic medicine. It's known for its adaptogenic properties, helping the body cope with stress and promoting mental balance. Tulsi is used to treat a variety of conditions from common colds to chronic stress. It has anti-inflammatory, antibacterial, and antioxidant properties. Regular consumption of Tulsi can aid in detoxification, improve digestion, and support the immune system. Our Tulsi products bring this ancient wisdom for modern health benefits.",
    },
    {
      herbName: 'Shatavari',
      imageSrc: './img/9.png',
      tagline: 'The Nourishing Tonic',
      briefIntro: 'Nurture your body with our Shatavari supplements.',
      price: '$12.00',
      description:
        "Shatavari, or Asparagus racemosus, is known in Ayurveda as a powerful rejuvenating herb, particularly for women. It's used to support reproductive health, maintain hormonal balance, and enhance fertility. Shatavari is also beneficial for digestive health, providing a soothing effect on the digestive tract. It's rich in antioxidants and is believed to help in boosting the immune system. This herb is also used for its potential in relieving symptoms of menopause and for general vitality and well-being. Our Shatavari supplements are a natural way to support female health at all stages of life.",
    },
    {
      herbName: 'Ginseng',
      imageSrc: './img/10.png',
      tagline: 'The Root of Vitality',
      briefIntro: 'Energize your life with our Ginseng root extract.',
      price: '$15.50',
      description:
        "Ginseng, renowned for its remarkable health benefits, is a root used extensively in traditional Chinese medicine. It's known for its ability to enhance physical and mental energy, reduce stress, and improve cognitive function. Ginseng has been found to regulate blood sugar, boost the immune system, and enhance sexual health. It contains powerful antioxidant and anti-inflammatory compounds, making it a valuable herb for overall health maintenance. Our Ginseng supplements provide a natural and effective way to boost your vitality and well-being.",
    },
    {
      herbName: 'Licorice',
      imageSrc: './img/11.png',
      tagline: 'The Sweet Healer',
      briefIntro: 'Discover the sweet and soothing benefits of Licorice.',
      price: '$10.25',
      description:
        "Licorice, or Glycyrrhiza glabra, has been used in herbal medicine for thousands of years for its extensive healing properties. It's particularly known for soothing gastrointestinal problems, including stomach ulcers, heartburn, and indigestion. Licorice also has anti-inflammatory and immune-boosting properties. It's used in respiratory treatments to alleviate sore throat, bronchitis, and coughs. Licorice is also employed in skin care for its natural skin-lightening and anti-aging properties. Our Licorice products offer a natural remedy for a range of health issues, coupled with its characteristic sweet flavor.",
    },
    {
      herbName: 'Gotu Kola',
      imageSrc: './img/12.png',
      tagline: 'The Herb of Longevity',
      briefIntro:
        'Embrace wellness with our rejuvenating Gotu Kola supplements.',
      price: '$12.99',
      description:
        "Gotu Kola, often called the 'herb of longevity,' has been a staple in traditional Chinese, Indonesian, and Ayurvedic medicine. This ancient herb is known for its remarkable ability to enhance cognitive functions, promote wound healing, and improve circulation. Gotu Kola is also celebrated for its anti-inflammatory and antioxidant properties. It's commonly used to treat varicose veins, improve skin conditions, reduce anxiety, and boost overall vitality. This powerful herb not only supports physical health but is also believed to promote spiritual calmness and clarity, making it a unique addition to your daily wellness routine.",
    },
  ];

  let params = new URLSearchParams(window.location.search);
  let herbIndex = params.get('herb');
  let getHerbDetailsByIndex = function (index) {
    return herbs[index - 1];
  };
  console.log('herbIndex', herbIndex);

  let herbDetail = getHerbDetailsByIndex(herbIndex);
  document.getElementById('herb-name').innerText = herbDetail.herbName;
  document.getElementById('herb-tagline').innerText = herbDetail.tagline;
  document.getElementById('herb-intro').innerHTML = herbDetail.briefIntro;
  document.getElementById('herb-image').src = herbDetail.imageSrc;
  document.getElementById('herb-description').innerText =
    herbDetail.description;
});
