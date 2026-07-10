(() => {
const REPO_ROOT = 'https://raw.githubusercontent.com/FNK-Author/FNK_Fanfictions/main/';

const readerAssets = {
  introText: `${REPO_ROOT}intro.txt`,
  introImage: `${REPO_ROOT}intro.png`,
  chapter: (prefix, chapterNumber) => `${REPO_ROOT}${prefix}${chapterNumber}.txt`,
  chapterNote: (prefix, chapterNumber, kind) => `${REPO_ROOT}${storyCode(prefix)}_${chapterNumber}_${kind}.txt`,
  image: (fileName) => `${REPO_ROOT}${fileName}`,
  music: (fileName) => `${REPO_ROOT}${withExtension(fileName, 'mp3')}`,
  atmos: (fileName) => `${REPO_ROOT}${withExtension(fileName, 'mp3')}`
};

function storyCode(prefix) {
  return prefix.replace(/_$/, '');
}

function withExtension(fileName, extension) {
  return fileName.endsWith(`.${extension}`) ? fileName : `${fileName}.${extension}`;
}

const atmosList = [
  { name: 'Regen', src: readerAssets.atmos('Immersion_Regen') },
  { name: 'Gewitter', src: readerAssets.atmos('Immersion_Gewitter') },
  { name: 'Kamin', src: readerAssets.atmos('Immersion_Kamin') },
  { name: 'Meeresrauschen', src: readerAssets.atmos('Immersion_Meeresrauschen') },
  { name: 'Öffentlicher Park', src: readerAssets.atmos('Immersion_Park') },
  { name: 'Wald bei Tag', src: readerAssets.atmos('Immersion_Wald_bei_Tag') },
  { name: 'Wald bei Nacht', src: readerAssets.atmos('Immersion_Wald_bei_Nacht') }
];

const image = readerAssets.image;

const stories = {
  'Die Hexe in der Nacht (Harry Potter)': {
    prefix: 'dhidn_',
    bookTitle: 'Die Hexe in der Nacht',
    isVisible: true,
    chapters: [
      'Der Fang seines Lebens', 'Die Regelbrecher', 'Missetat begangen', 'Die Feier', 'Neugier',
      'Das Geheimnis', 'Der Trank', 'Der Sturm', 'Ein Wunsch geht in Erfüllung', 'Bis wir uns irgendwann wiedersehen und zusammenwachsen',
      'Geschichten in der Hütte', 'Die Nacht ist noch nicht vorbei', 'Apfel-Zimt', 'Hirsch und Pferd', 'Die Schuld',
      'Pfefferminz Melodie', 'Eine kleine Ewigkeit', 'Eskalation - Teil 1', 'Eskalation - Teil 2', 'Träumerei',
      'Tunichtgut', 'Erinnerungslücken', 'Unverzeihlich', 'Der Tiefpunkt', 'Felicity - Teil 1: Das Geheimnis',
      'Felicity - Teil 2: Die Freundschaft', 'Felicity - Teil 3: Der Unfall', 'Felicity - Teil 4: Das Portrait', 'Ein offenes Ohr', 'Therapie',
      'Solo', 'Der Hexentag - Teil 1', 'Der Hexentag - Teil 2', 'Der Hexentag - Teil 3', 'Der Hexentag - Teil 4', 'Blut und Stiele'
    ],
    triggers: {
      0: [
        { line: 1, image: image('dhidn_1_1.png'), nsfw: true, candleUnlock: false },
        { line: 1, music: 'dhidn_1_1.mp3' },
        { line: 1, video: 'https://www.youtube.com/embed/uwJ5CX20q6I?si=FDKTg3V8E0f1oyO9' },
        { line: 5, image: image('dhidn_1_2.png'), nsfw: true }
      ],
      1: [
        { line: 1, music: 'dhidn_2_1.mp3' },
        { line: 49, image: image('dhidn_2_1.png'), nsfw: true }
      ],
      2: [
        { line: 1, music: 'dhidn_3_1.mp3' },
        { line: 1, image: image('dhidn_3_1.png'), nsfw: true }
      ],
      3: [
        { line: 1, music: 'dhidn_4_1.mp3' },
        { line: 29, image: image('dhidn_4_1.png'), nsfw: true }
      ],
      4: [
        { line: 1, music: '' },
        { line: 15, image: image('dhidn_5_1.png'), nsfw: true }
      ],
      5: [
        { line: 1, music: '' },
        { line: 57, image: image('dhidn_6_1.png'), nsfw: true }
      ],
      6: [
        { line: 1, music: '' },
        { line: 17, image: image('dhidn_7_1.png'), nsfw: true }
      ],
      7: [
        { line: 1, music: '' },
        { line: 57, image: image('dhidn_8_1.png'), nsfw: true }
      ],
      8: [
        { line: 1, music: '' },
        { line: 14, image: image('dhidn_9_1.png'), nsfw: true }
      ],
      9: [
        { line: 1, music: '' },
        { line: 293, image: image('dhidn_10_1.png'), nsfw: true }
      ],
      10: [
        { line: 1, music: '' },
        { line: 138, image: image('dhidn_11_1.png'), nsfw: true }
      ],
      11: [
        { line: 1, music: '' },
        { line: 138, image: image('dhidn_12_1.png'), nsfw: true }
      ],
      12: [
        { line: 1, music: '' },
        { line: 159, image: image('dhidn_13_1.png'), nsfw: true }
      ],
      13: [
        { line: 1, music: '' },
        { line: 29, image: image('dhidn_14_1.png'), nsfw: true }
      ],
      14: [
        { line: 1, music: '' },
        { line: 21, image: image('dhidn_15_1.png'), nsfw: true }
      ],
      15: [
        { line: 1, music: '' },
        { line: 145, image: image('dhidn_16_1.png'), nsfw: true }
      ],
      16: [
        { line: 1, music: '' },
        { line: 232, image: image('dhidn_17_1.png'), nsfw: true }
      ],
      17: [
        { line: 1, music: '' },
        { line: 1, image: image('dhidn_18_1.png'), nsfw: true }
      ],
      18: [
        { line: 1, music: '' },
        { line: 141, image: image('dhidn_19_1.png'), nsfw: true }
      ],
      19: [{ line: 1, music: '' }],
      20: [{ line: 1, music: '' }],
      21: [{ line: 1, music: '' }],
      22: [{ line: 1, music: '' }],
      23: [{ line: 1, music: '' }],
      24: [{ line: 1, music: '' }],
      25: [{ line: 1, music: '' }],
      26: [{ line: 1, music: '' }],
      27: [{ line: 1, music: '' }],
      28: [{ line: 1, music: '' }],
      29: [{ line: 1, music: '' }],
      30: [{ line: 1, music: '' }],
      31: [{ line: 1, music: '' }],
      32: [{ line: 1, music: '' }],
      33: [{ line: 1, music: '' }],
      34: [{ line: 1, music: '' }],
      35: [
        { line: 1, music: 'dhidn_36_1.mp3' },
        { line: 39, image: image('dhidn_36_1.png'), nsfw: false },
        { line: 63, music: 'dhidn_36_2.mp3' },
        { line: 118, music: 'dhidn_36_3.mp3' },
        { line: 292, music: 'dhidn_36_4.mp3' },
        { line: 332, image: image('dhidn_36_2.png'), nsfw: false },
        { line: 398, music: 'dhidn_36_5.mp3' },
        { line: 596, music: 'dhidn_36_6.mp3' },
        { line: 680, image: image('dhidn_36_3.png'), nsfw: false },
        { line: 696, music: 'dhidn_36_7.mp3' }
      ]
    }
  },
  'SADMAX (Stranger Things)': {
    prefix: 'sadmax_',
    bookTitle: 'SADMAX',
    isVisible: true,
    chapters: ['Prolog', '22. Oktober 1984'],
    triggers: {
      0: [
        { line: 1, music: 'sadmax_1_1.mp3' },
        { line: 1, image: image('sadmax_1_1.png') },
        { line: 1, video: 'https://www.youtube.com/embed/FtMBI8l4lnI?si=zda9YfT8cq_hbF3h' }
      ],
      1: [
        { line: 1, music: 'sadmax_2_1.mp3' }
      ]
    }
  },
  'Gefangen (Star Wars)': {
    prefix: 'gefangen_',
    bookTitle: 'Gefangen',
    isVisible: true,
    chapters: ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5', 'Tag 6 - Morgendämmerung'],
    triggers: {
      0: [
        { line: 1, music: 'gefangen_1_1.mp3' },
        { line: 1, image: image('gefangen_1_1.png') },
        { line: 150, music: 'gefangen_1_2.mp3' }
      ],
      1: [{ line: 1, music: 'gefangen_2_1.mp3' }],
      2: [{ line: 1, music: 'gefangen_3_1.mp3' }],
      3: [{ line: 1, music: 'gefangen_4_1.mp3' }],
      4: [{ line: 1, music: 'gefangen_5_1.mp3' }],
      5: [{ line: 1, music: 'gefangen_6_1.mp3' }]
    }
  },
  'Veilchen für Vi (Arcane)': {
    prefix: 'vfv_',
    bookTitle: 'Veilchen für Vi',
    isVisible: true,
    chapters: ['Veilchen für Vi'],
    triggers: {
      0: [
        { line: 1, music: 'vfv_1_1.mp3' },
        { line: 1, image: image('vfv_1_1.png') }
      ]
    }
  },
  'Erinnermich, der Harry Potter Adventskalender 2024': {
    prefix: 'erinnermich24_',
    bookTitle: 'Erinnermich, der Harry Potter Adventskalender 2024',
    isVisible: true,
    chapters: [
      'Vorwort', 'Harry Potter', 'Severus Snape', 'Fred Weasley', 'George Weasley',
      'Luna Lovegood', 'Draco Malfoy', 'Sirius Black', 'Remus Lupin', 'Bellatrix Lestrange',
      'Lucius Malfoy', 'Ginny Weasley', 'Ron Weasley', 'Neville Longbottom', 'Albus Dumbledore',
      'Viktor Krum', 'Molly Weasley', 'Percy Weasley', 'Lily Potter', 'James Potter',
      'Nymphadora Tonks', 'Minerva McGonagall', 'Dobby, der freie Elf', 'Rubeus Hagrid', 'Hermine Granger',
      'Nachwort'
    ],
    triggers: {
      0: [
        { line: 1, music: 'erinnermich24_1_1.mp3' },
        { line: 1, image: image('erinnermich24_1_1.png') }
      ],
      1: [{ line: 1, music: 'erinnermich24_2_1.mp3' }],
      2: [{ line: 1, music: '' }],
      3: [{ line: 1, music: '' }],
      4: [{ line: 1, music: '' }],
      5: [{ line: 1, music: '' }],
      6: [{ line: 1, music: '' }],
      7: [{ line: 1, music: '' }],
      8: [{ line: 1, music: '' }],
      9: [{ line: 1, music: '' }],
      10: [{ line: 1, music: '' }],
      11: [{ line: 1, music: '' }],
      12: [{ line: 1, music: '' }],
      13: [{ line: 1, music: '' }],
      14: [{ line: 1, music: '' }],
      15: [{ line: 1, music: '' }],
      16: [{ line: 1, music: '' }],
      17: [{ line: 1, music: '' }],
      18: [{ line: 1, music: '' }],
      19: [{ line: 1, music: '' }],
      20: [{ line: 1, music: '' }],
      21: [{ line: 1, music: '' }],
      22: [{ line: 1, music: '' }],
      23: [{ line: 1, music: '' }],
      24: [{ line: 1, music: '' }],
      25: [{ line: 1, music: 'erinnermich24_26_1.mp3' }]
    }
  },
  '化身的职责 - Die Pflicht eines Avatars': {
    prefix: 'dpea_',
    bookTitle: '化身的职责 - Die Pflicht eines Avatars',
    isVisible: true,
    chapters: ['Die Pflicht eines Avatars'],
    triggers: {
      0: [
        { line: 1, music: 'dpea_1_1.mp3' },
        { line: 84, music: 'dpea_1_2.mp3' },
        { line: 122, music: 'dpea_1_3.mp3' },
        { line: 196, music: 'dpea_1_4.mp3' },
        { line: 234, music: 'dpea_1_5.mp3' },
        { line: 294, music: 'dpea_1_6.mp3' },
        { line: 397, music: 'dpea_1_7.mp3' },
        { line: 427, music: 'dpea_1_8.mp3' },
        { line: 547, music: 'dpea_1_9.mp3' },
        { line: 1, image: image('dpea_1_1.png') },
        { line: 62, image: image('dpea_1_2.png'), nsfw: true },
        { line: 136, image: image('dpea_1_3.png'), nsfw: true },
        { line: 297, image: image('dpea_1_4.png'), nsfw: true },
        { line: 445, image: image('dpea_1_5.png'), nsfw: true },
        { line: 555, image: image('dpea_1_6.png'), nsfw: true }
      ]
    }
  }
};

function ensureChapterStartTriggers(story) {
  const code = storyCode(story.prefix || '');
  if (!code || !Array.isArray(story.chapters)) return;
  story.triggers = story.triggers || {};

  story.chapters.forEach((_, index) => {
    const chapterNumber = index + 1;
    const triggers = story.triggers[index] || [];
    story.triggers[index] = triggers;

    const lineOneMusic = triggers.find((trigger) => trigger.line === 1 && Object.prototype.hasOwnProperty.call(trigger, 'music'));
    if (lineOneMusic) {
      if (!lineOneMusic.music) lineOneMusic.music = `${code}_${chapterNumber}_1.mp3`;
    } else {
      triggers.unshift({ line: 1, music: `${code}_${chapterNumber}_1.mp3` });
    }

  });
}

Object.values(stories).forEach(ensureChapterStartTriggers);

window.FNK_READER_DATA = {
  stories,
  atmosList,
  readerAssets
};
})();
