document.addEventListener('DOMContentLoaded', () => {
  // Example JSON data
  const foodData = [
{
  "Food Type": "Beans, pulses and legumes",
  "Food": "Lima beans (white)",
  "Typical serving size (grams)": "170 grams",
  "Fiber Per Gram": 0.078,
  "Fiber Per Serving": 13.3,
  "Source": "1"
 },
 {
  "Food Type": "Beans, pulses and legumes",
  "Food": "Navy beans",
  "Typical serving size (grams)": "113 grams",
  "Fiber Per Gram": 0.085,
  "Fiber Per Serving": 9.6,
  "Source": "1"
 },
 {
  "Food Type": "Beans, pulses and legumes",
  "Food": "Small white beans",
  "Typical serving size (grams)": "113 grams",
  "Fiber Per Gram": 0.082,
  "Fiber Per Serving": 9.3,
  "Source": "1"
 },
 {
  "Food Type": "Beans, pulses and legumes",
  "Food": "Yellow beans",
  "Typical serving size (grams)": "113 grams",
  "Fiber Per Gram": 0.081,
  "Fiber Per Serving": 9.2,
  "Source": "1"
 },
 {
  "Food Type": "Beans, pulses and legumes",
  "Food": "Adzuki beans",
  "Typical serving size (grams)": "115 grams",
  "Fiber Per Gram": 0.073,
  "Fiber Per Serving": 8.4,
  "Source": "1"
 },
 {
  "Food Type": "Beans, pulses and legumes",
  "Food": "Split peas",
  "Typical serving size (grams)": "80 grams",
  "Fiber Per Gram": 0.1025,
  "Fiber Per Serving": 8.2,
  "Source": "1"
 },
 {
  "Food Type": "Beans, pulses and legumes",
  "Food": "Lentils",
  "Typical serving size (grams)": "100 grams",
  "Fiber Per Gram": 0.078,
  "Fiber Per Serving": 7.8,
  "Source": "1"
 },
 {
  "Food Type": "Beans, pulses and legumes",
  "Food": "Lupini beans",
  "Typical serving size (grams)": "83 grams",
  "Fiber Per Gram": 0.094,
  "Fiber Per Serving": 7.8,
  "Source": "1"
 },
 {
  "Food Type": "Beans, pulses and legumes",
  "Food": "Mung beans",
  "Typical serving size (grams)": "113 grams",
  "Fiber Per Gram": 0.068,
  "Fiber Per Serving": 7.7,
  "Source": "1"
 },
 {
  "Food Type": "Beans, pulses and legumes",
  "Food": "Black turtle beans",
  "Typical serving size (grams)": "120 grams",
  "Fiber Per Gram": 0.064,
  "Fiber Per Serving": 7.7,
  "Source": "1"
 },
 {
  "Food Type": "Beans, pulses and legumes",
  "Food": "Pinto beans",
  "Typical serving size (grams)": "113 grams",
  "Fiber Per Gram": 0.068,
  "Fiber Per Serving": 7.7,
  "Source": "1"
 },
 {
  "Food Type": "Beans, pulses and legumes",
  "Food": "Cranberry (roman) beans",
  "Typical serving size (grams)": "113 grams",
  "Fiber Per Gram": 0.067,
  "Fiber Per Serving": 7.6,
  "Source": "1"
 },
 {
  "Food Type": "Beans, pulses and legumes",
  "Food": "Black beans",
  "Typical serving size (grams)": "120 grams",
  "Fiber Per Gram": 0.0625,
  "Fiber Per Serving": 7.5,
  "Source": "1"
 },
 {
  "Food Type": "Beans, pulses and legumes",
  "Food": "Chickpeas (garbanzo beans)",
  "Typical serving size (grams)": "100 grams",
  "Fiber Per Gram": 0.063,
  "Fiber Per Serving": 6.3,
  "Source": "1"
 },
 {
  "Food Type": "Beans, pulses and legumes",
  "Food": "Great northern beans",
  "Typical serving size (grams)": "130 grams",
  "Fiber Per Gram": 0.048,
  "Fiber Per Serving": 6.2,
  "Source": "1"
 },
 {
  "Food Type": "Beans, pulses and legumes",
  "Food": "Pigeon peas",
  "Typical serving size (grams)": "84 grams",
  "Fiber Per Gram": 0.068,
  "Fiber Per Serving": 5.7,
  "Source": "1"
 },
 {
  "Food Type": "Beans, pulses and legumes",
  "Food": "Kidney beans",
  "Typical serving size (grams)": "90 grams",
  "Fiber Per Gram": 0.063,
  "Fiber Per Serving": 5.7,
  "Source": "1"
 },
 {
  "Food Type": "Beans, pulses and legumes",
  "Food": "White beans",
  "Typical serving size (grams)": "113 grams",
  "Fiber Per Gram": 0.05,
  "Fiber Per Serving": 5.7,
  "Source": "1"
 },
 {
  "Food Type": "Beans, pulses and legumes",
  "Food": "Black-eyed peas",
  "Typical serving size (grams)": "130 grams",
  "Fiber Per Gram": 0.043,
  "Fiber Per Serving": 5.6,
  "Source": "1"
 },
 {
  "Food Type": "Beans, pulses and legumes",
  "Food": "Cowpeas",
  "Typical serving size (grams)": "113 grams",
  "Fiber Per Gram": 0.049,
  "Fiber Per Serving": 5.5,
  "Source": "1"
 },
 {
  "Food Type": "Beans, pulses and legumes",
  "Food": "Soybeans",
  "Typical serving size (grams)": "86 grams",
  "Fiber Per Gram": 0.06,
  "Fiber Per Serving": 5.2,
  "Source": "1"
 },
 {
  "Food Type": "Beans, pulses and legumes",
  "Food": "Fava beans",
  "Typical serving size (grams)": "134 grams",
  "Fiber Per Gram": 0.04,
  "Fiber Per Serving": 5.4,
  "Source": "1"
 },
 {
  "Food Type": "Beans, pulses and legumes",
  "Food": "Snow peas",
  "Typical serving size (grams)": "160 grams",
  "Fiber Per Gram": 0.028,
  "Fiber Per Serving": 4.5,
  "Source": "1"
 },
 {
  "Food Type": "Beans, pulses and legumes",
  "Food": "Pink beans",
  "Typical serving size (grams)": "113 grams",
  "Fiber Per Gram": 0.04,
  "Fiber Per Serving": 4.5,
  "Source": "1"
 },
 {
  "Food Type": "Breads",
  "Food": "Bagel",
  "Typical serving size (grams)": "110 grams (1 bagel)",
  "Fiber Per Gram": 0.014,
  "Fiber Per Serving": 1.5,
  "Source": "2"
 },
 {
  "Food Type": "Breads",
  "Food": "English muffin",
  "Typical serving size (grams)": "57 grams (1 muffin)",
  "Fiber Per Gram": 0.026,
  "Fiber Per Serving": 1.5,
  "Source": "2"
 },
 {
  "Food Type": "Breads",
  "Food": "French bread (baguette)",
  "Typical serving size (grams)": "59 grams (1 slice)",
  "Fiber Per Gram": 0.008,
  "Fiber Per Serving": 0.5,
  "Source": "2"
 },
 {
  "Food Type": "Breads",
  "Food": "Italian bread (ciabatta)",
  "Typical serving size (grams)": "28 grams (1 slice)",
  "Fiber Per Gram": 0.089,
  "Fiber Per Serving": 2.5,
  "Source": "2"
 },
 {
  "Food Type": "Breads",
  "Food": "Multi-grain bread",
  "Typical serving size (grams)": "26 grams (1 slice)",
  "Fiber Per Gram": 0.058,
  "Fiber Per Serving": 1.5,
  "Source": "2"
 },
 {
  "Food Type": "Breads",
  "Food": "Pancake",
  "Typical serving size (grams)": "34 grams (1 pancake)",
  "Fiber Per Gram": 0.029,
  "Fiber Per Serving": 1,
  "Source": "2"
 },
 {
  "Food Type": "Breads",
  "Food": "Pita (white)",
  "Typical serving size (grams)": "60 grams (1 pita)",
  "Fiber Per Gram": 0.017,
  "Fiber Per Serving": 1,
  "Source": "2"
 },
 {
  "Food Type": "Breads",
  "Food": "Wheat bread",
  "Typical serving size (grams)": "43 grams (1 slice)",
  "Fiber Per Gram": 0.058,
  "Fiber Per Serving": 2.5,
  "Source": "2"
 },
 {
  "Food Type": "Breads",
  "Food": "White bread",
  "Typical serving size (grams)": "38 grams (1 slice)",
  "Fiber Per Gram": 0.026,
  "Fiber Per Serving": 1,
  "Source": "2"
 },
 {
  "Food Type": "Breads",
  "Food": "Whole wheat bread",
  "Typical serving size (grams)": "43 grams (1 slice)",
  "Fiber Per Gram": 0.047,
  "Fiber Per Serving": 2,
  "Source": "2"
 },
 {
  "Food Type": "Fruit",
  "Food": "Apple (skin on)",
  "Typical serving size (grams)": "100 grams (1 apple)",
  "Fiber Per Gram": 0.037,
  "Fiber Per Serving": 3.7,
  "Source": "2"
 },
 {
  "Food Type": "Fruit",
  "Food": "Apple (skinless)",
  "Typical serving size (grams)": "95 grams (1 apple)",
  "Fiber Per Gram": 0.03,
  "Fiber Per Serving": 2.9,
  "Source": "2"
 },
 {
  "Food Type": "Fruit",
  "Food": "Apricot",
  "Typical serving size (grams)": "120 grams (3 apricots)",
  "Fiber Per Gram": 0.02,
  "Fiber Per Serving": 2.4,
  "Source": "2"
 },
 {
  "Food Type": "Fruit",
  "Food": "Banana",
  "Typical serving size (grams)": "120 grams (1 banana)",
  "Fiber Per Gram": 0.0225,
  "Fiber Per Serving": 2.7,
  "Source": "2"
 },
 {
  "Food Type": "Fruit",
  "Food": "Blueberries",
  "Typical serving size (grams)": "100 grams (50 blueberries)",
  "Fiber Per Gram": 0.04,
  "Fiber Per Serving": 4,
  "Source": "2"
 },
 {
  "Food Type": "Fruit",
  "Food": "Cantaloupe",
  "Typical serving size (grams)": "160 grams (4 pieces)",
  "Fiber Per Gram": 0.001,
  "Fiber Per Serving": 0.2,
  "Source": "2"
 },
 {
  "Food Type": "Fruit",
  "Food": "Fruit Salad",
  "Typical serving size (grams)": "100 grams",
  "Fiber Per Gram": 0.013,
  "Fiber Per Serving": 1.3,
  "Source": "2"
 },
 {
  "Food Type": "Fruit",
  "Food": "Cherries",
  "Typical serving size (grams)": "100 grams (10 cherries)",
  "Fiber Per Gram": 0.013,
  "Fiber Per Serving": 1.3,
  "Source": "2"
 },
 {
  "Food Type": "Fruit",
  "Food": "Grapefruit",
  "Typical serving size (grams)": "80 grams (1\/2 a grapefruit)",
  "Fiber Per Gram": 0.01625,
  "Fiber Per Serving": 1.3,
  "Source": "2"
 },
 {
  "Food Type": "Fruit",
  "Food": "Grapes",
  "Typical serving size (grams)": "150 grams (30 grapes)",
  "Fiber Per Gram": 0.008,
  "Fiber Per Serving": 1.2,
  "Source": "2"
 },
 {
  "Food Type": "Fruit",
  "Food": "Melon",
  "Typical serving size (grams)": "160 grams (4 pieces)",
  "Fiber Per Gram": 0.006,
  "Fiber Per Serving": 1,
  "Source": "2"
 },
 {
  "Food Type": "Fruit",
  "Food": "Mandarin",
  "Typical serving size (grams)": "166 grams (2 mandarines)",
  "Fiber Per Gram": 0.006,
  "Fiber Per Serving": 1,
  "Source": "2"
 },
 {
  "Food Type": "Fruit",
  "Food": "Nectarine",
  "Typical serving size (grams)": "140 grams (1 nectarine)",
  "Fiber Per Gram": 0.016,
  "Fiber Per Serving": 2.2,
  "Source": "2"
 },
 {
  "Food Type": "Fruit",
  "Food": "Orange",
  "Typical serving size (grams)": "140 grams (1 orange)",
  "Fiber Per Gram": 0.02,
  "Fiber Per Serving": 2.8,
  "Source": "2"
 },
 {
  "Food Type": "Fruit",
  "Food": "Peach",
  "Typical serving size (grams)": "150 grams (1 peach)",
  "Fiber Per Gram": 0.01,
  "Fiber Per Serving": 1.5,
  "Source": "2"
 },
 {
  "Food Type": "Fruit",
  "Food": "Pear",
  "Typical serving size (grams)": "180 grams (1 pear)",
  "Fiber Per Gram": 0.021,
  "Fiber Per Serving": 3.8,
  "Source": "2"
 },
 {
  "Food Type": "Fruit",
  "Food": "Pineapple",
  "Typical serving size (grams)": "160 grams (4 pieces)",
  "Fiber Per Gram": 0.002,
  "Fiber Per Serving": 0.3,
  "Source": "2"
 },
 {
  "Food Type": "Fruit",
  "Food": "Plum",
  "Typical serving size (grams)": "66 grams (1 plum)",
  "Fiber Per Gram": 0.015,
  "Fiber Per Serving": 1,
  "Source": "2"
 },
 {
  "Food Type": "Fruit",
  "Food": "Prunes",
  "Typical serving size (grams)": "50 grams (5 grams)",
  "Fiber Per Gram": 0.06,
  "Fiber Per Serving": 3,
  "Source": "2"
 },
 {
  "Food Type": "Fruit",
  "Food": "Raisins",
  "Typical serving size (grams)": "130 grams (100 raisins)",
  "Fiber Per Gram": 0.03,
  "Fiber Per Serving": 3.9,
  "Source": "2"
 },
 {
  "Food Type": "Fruit",
  "Food": "Raspberries",
  "Typical serving size (grams)": "125 grams (30 raspberries)",
  "Fiber Per Gram": 0.067,
  "Fiber Per Serving": 8.4,
  "Source": "2"
 },
 {
  "Food Type": "Fruit",
  "Food": "Strawberries",
  "Typical serving size (grams)": "166 grams (10 strawberries)",
  "Fiber Per Gram": 0.02,
  "Fiber Per Serving": 3.3,
  "Source": "2"
 },
 {
  "Food Type": "Fruit",
  "Food": "Tangerine",
  "Typical serving size (grams)": "88 grams (1 tangerine)",
  "Fiber Per Gram": 0.023,
  "Fiber Per Serving": 2,
  "Source": "2"
 },
 {
  "Food Type": "Fruit",
  "Food": "Watermelon",
  "Typical serving size (grams)": "160 grams (4 pieces)",
  "Fiber Per Gram": 0.005,
  "Fiber Per Serving": 0.8,
  "Source": "2"
 },
 {
  "Food Type": "Fruit",
  "Food": "Tomato",
  "Typical serving size (grams)": "123 grams (1 potato)",
  "Fiber Per Gram": 0.008,
  "Fiber Per Serving": 1,
  "Source": "2"
 },
 {
  "Food Type": "Fruit",
  "Food": "Breadfruit",
  "Typical serving size (grams)": "220 grams",
  "Fiber Per Gram": 0.036,
  "Fiber Per Serving": 7.9,
  "Source": "1"
 },
 {
  "Food Type": "Fruit",
  "Food": "Avocado",
  "Typical serving size (grams)": "77 grams (1\/4 avocado)",
  "Fiber Per Gram": 0.065,
  "Fiber Per Serving": 5,
  "Source": "1"
 },
 {
  "Food Type": "Fruit",
  "Food": "Sapodilla",
  "Typical serving size (grams)": "250 grams (5 sapodillas)",
  "Fiber Per Gram": 0.04,
  "Fiber Per Serving": 10,
  "Source": "1"
 },
 {
  "Food Type": "Fruit",
  "Food": "Guava",
  "Typical serving size (grams)": "100 grams (2 guavas)",
  "Fiber Per Gram": 0.054,
  "Fiber Per Serving": 5.4,
  "Source": "1"
 },
 {
  "Food Type": "Fruit",
  "Food": "Loganberries",
  "Typical serving size (grams)": "150 grams (30 loganberries)",
  "Fiber Per Gram": 0.053,
  "Fiber Per Serving": 8,
  "Source": "1"
 },
 {
  "Food Type": "Fruit",
  "Food": "Blackberries",
  "Typical serving size (grams)": "144 grams 18 blackberries",
  "Fiber Per Gram": 0.053,
  "Fiber Per Serving": 7.6,
  "Source": "1"
 },
 {
  "Food Type": "Fruit",
  "Food": "Boysenberries",
  "Typical serving size (grams)": "132 grams (16 boysenberries)",
  "Fiber Per Gram": 0.053,
  "Fiber Per Serving": 7,
  "Source": "1"
 },
 {
  "Food Type": "Fruit",
  "Food": "Gooseberries",
  "Typical serving size (grams)": "150 grams (30 gooseberries)",
  "Fiber Per Gram": 0.043,
  "Fiber Per Serving": 6.5,
  "Source": "1"
 },
 {
  "Food Type": "Fruit",
  "Food": "Asian pear",
  "Typical serving size (grams)": "178 grams (1 asian pear)",
  "Fiber Per Gram": 0.037,
  "Fiber Per Serving": 6.6,
  "Source": "1"
 },
 {
  "Food Type": "Fruit",
  "Food": "Passion fruit",
  "Typical serving size (grams)": "60 grams (1 passion fruit)",
  "Fiber Per Gram": 0.102,
  "Fiber Per Serving": 6.1,
  "Source": "1"
 },
 {
  "Food Type": "Fruit",
  "Food": "Persimmon",
  "Typical serving size (grams)": "100 grams (1 persimmon)",
  "Fiber Per Gram": 0.06,
  "Fiber Per Serving": 6,
  "Source": "1"
 },
 {
  "Food Type": "Fruit",
  "Food": "Kiwifruit",
  "Typical serving size (grams)": "180 grams (2 kiwis)",
  "Fiber Per Gram": 0.03,
  "Fiber Per Serving": 5.4,
  "Source": "1"
 },
 {
  "Food Type": "Fruit",
  "Food": "Cherimoya",
  "Typical serving size (grams)": "160 grams (1\/2 cherimoya edible flesh)",
  "Fiber Per Gram": 0.03,
  "Fiber Per Serving": 4.8,
  "Source": "1"
 },
 {
  "Food Type": "Fruit",
  "Food": "Durian",
  "Typical serving size (grams)": "243 grams (1\/2 durian edible flesh)",
  "Fiber Per Gram": 0.019,
  "Fiber Per Serving": 4.6,
  "Source": "1"
 },
 {
  "Food Type": "Fruit",
  "Food": "Starfruit",
  "Typical serving size (grams)": "108 grams (1 starfruit)",
  "Fiber Per Gram": 0.034,
  "Fiber Per Serving": 3.7,
  "Source": "1"
 },
 {
  "Food Type": "Fruit",
  "Food": "Figs,",
  "Typical serving size (grams)": "40 grams (1 fig)",
  "Fiber Per Gram": 0.094,
  "Fiber Per Serving": 3.8,
  "Source": "1"
 },
 {
  "Food Type": "Fruit",
  "Food": "Pomegranate seeds",
  "Typical serving size (grams)": "87 grams",
  "Fiber Per Gram": 0.04,
  "Fiber Per Serving": 3.5,
  "Source": "1"
 },
 {
  "Food Type": "Fruit",
  "Food": "Dates",
  "Typical serving size (grams)": "55 grams (5 dates)",
  "Fiber Per Gram": 0.053,
  "Fiber Per Serving": 2.9,
  "Source": "1"
 },
 {
  "Food Type": "Grains",
  "Food": "Popcorn",
  "Typical serving size (grams)": "24 grams (3 handfuls)",
  "Fiber Per Gram": 0.242,
  "Fiber Per Serving": 5.8,
  "Source": "1"
 },
 {
  "Food Type": "Grains",
  "Food": "Bulgur wheat",
  "Typical serving size (grams)": "113 grams",
  "Fiber Per Gram": 0.036,
  "Fiber Per Serving": 4.1,
  "Source": "1"
 },
 {
  "Food Type": "Grains",
  "Food": "Spelt",
  "Typical serving size (grams)": "194 grams",
  "Fiber Per Gram": 0.02,
  "Fiber Per Serving": 3.9,
  "Source": "1"
 },
 {
  "Food Type": "Grains",
  "Food": "Teff",
  "Typical serving size (grams)": "126 grams",
  "Fiber Per Gram": 0.029,
  "Fiber Per Serving": 3.7,
  "Source": "1"
 },
 {
  "Food Type": "Grains",
  "Food": "Barley",
  "Typical serving size (grams)": "78.5 grams",
  "Fiber Per Gram": 0.038,
  "Fiber Per Serving": 3,
  "Source": "1"
 },
 {
  "Food Type": "Grains",
  "Food": "Rolled oats (cooked)",
  "Typical serving size (grams)": "40 grams (1 bowl)",
  "Fiber Per Gram": 0.105,
  "Fiber Per Serving": 4.2,
  "Source": "1"
 },
 {
  "Food Type": "Grains",
  "Food": "Whole wheat crackers",
  "Typical serving size (grams)": "11 grams (3 crackers)",
  "Fiber Per Gram": 0.264,
  "Fiber Per Serving": 2.9,
  "Source": "1"
 },
 {
  "Food Type": "Breads",
  "Food": "Chapati",
  "Typical serving size (grams)": "40 grams (1 chapati)",
  "Fiber Per Gram": 0.1,
  "Fiber Per Serving": 4,
  "Source": "1"
 },
 {
  "Food Type": "Breads",
  "Food": "Tortilla (wholewheat)",
  "Typical serving size (grams)": "14 grams (1 Tortilla)",
  "Fiber Per Gram": 0.2,
  "Fiber Per Serving": 2.8,
  "Source": "1"
 },
 {
  "Food Type": "Nuts and seeds",
  "Food": "Pumpkin seeds",
  "Typical serving size (grams)": "28 grams (300 pumpkin seeds)",
  "Fiber Per Gram": 0.186,
  "Fiber Per Serving": 5.2,
  "Source": "1"
 },
 {
  "Food Type": "Nuts and seeds",
  "Food": "Chia seeds",
  "Typical serving size (grams)": "14 grams",
  "Fiber Per Gram": 0.293,
  "Fiber Per Serving": 4.1,
  "Source": "1"
 },
 {
  "Food Type": "Nuts and seeds",
  "Food": "Almonds",
  "Typical serving size (grams)": "18 grams (15 almonds)",
  "Fiber Per Gram": 0.194,
  "Fiber Per Serving": 3.5,
  "Source": "1"
 },
 {
  "Food Type": "Nuts and seeds",
  "Food": "Chestnuts",
  "Typical serving size (grams)": "16 grams (3 chestnuts)",
  "Fiber Per Gram": 0.20625,
  "Fiber Per Serving": 3.3,
  "Source": "1"
 },
 {
  "Food Type": "Nuts and seeds",
  "Food": "Sunflower seeds",
  "Typical serving size (grams)": "16 grams (100 sunflower seeds)",
  "Fiber Per Gram": 0.19375,
  "Fiber Per Serving": 3.1,
  "Source": "1"
 },
 {
  "Food Type": "Nuts and seeds",
  "Food": "Pine nuts",
  "Typical serving size (grams)": "28 grams (50 pine nuts)",
  "Fiber Per Gram": 0.107,
  "Fiber Per Serving": 3,
  "Source": "1"
 },
 {
  "Food Type": "Nuts and seeds",
  "Food": "Pistachio nuts",
  "Typical serving size (grams)": "15 grams (20 pistachios)",
  "Fiber Per Gram": 0.193,
  "Fiber Per Serving": 2.9,
  "Source": "1"
 },
 {
  "Food Type": "Nuts and seeds",
  "Food": "Flax seeds",
  "Typical serving size (grams)": "7 grams",
  "Fiber Per Gram": 0.4,
  "Fiber Per Serving": 2.8,
  "Source": "1"
 },
 {
  "Food Type": "Nuts and seeds",
  "Food": "Hazelnuts",
  "Typical serving size (grams)": "16 grams (6 hazlenuts)",
  "Fiber Per Gram": 0.175,
  "Fiber Per Serving": 2.8,
  "Source": "1"
 },
 {
  "Food Type": "Nuts and seeds",
  "Food": "Coconut flesh",
  "Typical serving size (grams)": "28 grams (3 tablespoons coconut flesh)",
  "Fiber Per Gram": 0.169,
  "Fiber Per Serving": 4.7,
  "Source": "1"
 },
 {
  "Food Type": "Nuts and seeds",
  "Food": "Peanuts",
  "Typical serving size (grams)": "40 grams (80 nuts)",
  "Fiber Per Gram": 0.085,
  "Fiber Per Serving": 3.4,
  "Source": "3"
 },
 {
  "Food Type": "Pasta\/Rice",
  "Food": "White pasta (cooked)",
  "Typical serving size (grams)": "100 grams",
  "Fiber Per Gram": 0.032,
  "Fiber Per Serving": 3.2,
  "Source": "2"
 },
 {
  "Food Type": "Pasta\/Rice",
  "Food": "Whole wheat pasta (cooked)",
  "Typical serving size (grams)": "100 grams",
  "Fiber Per Gram": 0.025,
  "Fiber Per Serving": 2.5,
  "Source": "2"
 },
 {
  "Food Type": "Pasta\/Rice",
  "Food": "Brown rice (cooked)",
  "Typical serving size (grams)": "75 grams",
  "Fiber Per Gram": 0.017,
  "Fiber Per Serving": 1.3,
  "Source": "2"
 },
 {
  "Food Type": "Pasta\/Rice",
  "Food": "White rice (cooked)",
  "Typical serving size (grams)": "75 grams",
  "Fiber Per Gram": 0.005,
  "Fiber Per Serving": 0.4,
  "Source": "2"
 },
 {
  "Food Type": "UK cereal brands",
  "Food": "Kellogg's Crunchy Nut Breakfast Cereal",
  "Typical serving size (grams)": "40 grams (1 bowl)",
  "Fiber Per Gram": 0.083,
  "Fiber Per Serving": 3.3,
  "Source": "4"
 },
 {
  "Food Type": "UK cereal brands",
  "Food": "Kellogg's Frosties Breakfast Cereal",
  "Typical serving size (grams)": "40 grams (1 bowl)",
  "Fiber Per Gram": 0.067,
  "Fiber Per Serving": 2.7,
  "Source": "4"
 },
 {
  "Food Type": "UK cereal brands",
  "Food": "Kellogg's Corn Flakes Breakfast Cereal",
  "Typical serving size (grams)": "40 grams (1 bowl)",
  "Fiber Per Gram": 0.1,
  "Fiber Per Serving": 4,
  "Source": "4"
 },
 {
  "Food Type": "UK cereal brands",
  "Food": "Golden Nuggets Nestle Golden Nuggets Cereal",
  "Typical serving size (grams)": "40 grams (1 bowl)",
  "Fiber Per Gram": 0.233,
  "Fiber Per Serving": 9.3,
  "Source": "4"
 },
 {
  "Food Type": "UK cereal brands",
  "Food": "Kellogg's Crunchy Nut Honey & Nut Clusters Cereal",
  "Typical serving size (grams)": "40 grams (1 bowl)",
  "Fiber Per Gram": 0.157,
  "Fiber Per Serving": 6.3,
  "Source": "4"
 },
 {
  "Food Type": "UK cereal brands",
  "Food": "Kellogg's Special K Peach & Apricot Breakfast Cereal",
  "Typical serving size (grams)": "40 grams (1 bowl)",
  "Fiber Per Gram": 0.187,
  "Fiber Per Serving": 7.5,
  "Source": "4"
 },
 {
  "Food Type": "UK cereal brands",
  "Food": "Kellogg's Just Right Breakfast Flakes Cereal",
  "Typical serving size (grams)": "40 grams (1 bowl)",
  "Fiber Per Gram": 0.15,
  "Fiber Per Serving": 6,
  "Source": "4"
 },
 {
  "Food Type": "UK cereal brands",
  "Food": "Kellogg's Blueberry Wheats Breakfast Cereal",
  "Typical serving size (grams)": "40 grams (1 bowl)",
  "Fiber Per Gram": 0.267,
  "Fiber Per Serving": 10.7,
  "Source": "4"
 },
 {
  "Food Type": "UK cereal brands",
  "Food": "Kellogg's Apricot Wheats Cereal",
  "Typical serving size (grams)": "40 grams (1 bowl)",
  "Fiber Per Gram": 0.263,
  "Fiber Per Serving": 10.5,
  "Source": "4"
 },
 {
  "Food Type": "UK cereal brands",
  "Food": "Kellogg's Krave Chocolate Hazelnut Cereal",
  "Typical serving size (grams)": "40 grams (1 bowl)",
  "Fiber Per Gram": 0.12,
  "Fiber Per Serving": 4.8,
  "Source": "4"
 },
 {
  "Food Type": "UK cereal brands",
  "Food": "Kellogg's All-Bran Original Cereal",
  "Typical serving size (grams)": "40 grams (1 bowl)",
  "Fiber Per Gram": 0.9,
  "Fiber Per Serving": 18,
  "Source": "4"
 },
 {
  "Food Type": "UK cereal brands",
  "Food": "Kellogg's Crunchy Nut Clusters Chocolate Cereal",
  "Typical serving size (grams)": "40 grams (1 bowl)",
  "Fiber Per Gram": 0.15,
  "Fiber Per Serving": 6,
  "Source": "4"
 },
 {
  "Food Type": "UK cereal brands",
  "Food": "Kellogg's Coco Pops Cereal",
  "Typical serving size (grams)": "40 grams (1 bowl)",
  "Fiber Per Gram": 0.127,
  "Fiber Per Serving": 5.1,
  "Source": "4"
 },
 {
  "Food Type": "UK cereal brands",
  "Food": "Shredded Wheat Nestle Shredded Wheat Honey Nut Cereal",
  "Typical serving size (grams)": "40 grams (1 bowl)",
  "Fiber Per Gram": 0.34,
  "Fiber Per Serving": 13.6,
  "Source": "4"
 },
 {
  "Food Type": "UK cereal brands",
  "Food": "Kellogg's Special K Milk Chocolate Cereal",
  "Typical serving size (grams)": "40 grams (1 bowl)",
  "Fiber Per Gram": 0.177,
  "Fiber Per Serving": 7.1,
  "Source": "4"
 },
 {
  "Food Type": "UK cereal brands",
  "Food": "Lion Nestle Lion Caramel & Chocolate Cereal",
  "Typical serving size (grams)": "40 grams (1 bowl)",
  "Fiber Per Gram": 0.233,
  "Fiber Per Serving": 9.3,
  "Source": "4"
 },
 {
  "Food Type": "UK cereal brands",
  "Food": "Nestle Curiously Cinnamon Churros Cereal",
  "Typical serving size (grams)": "40 grams (1 bowl)",
  "Fiber Per Gram": 0.167,
  "Fiber Per Serving": 6.7,
  "Source": "4"
 },
 {
  "Food Type": "UK cereal brands",
  "Food": "Kellogg's Chocolate Wheats Cereal",
  "Typical serving size (grams)": "40 grams (1 bowl)",
  "Fiber Per Gram": 0.333,
  "Fiber Per Serving": 13.3,
  "Source": "4"
 },
 {
  "Food Type": "UK cereal brands",
  "Food": "Weetabix Crunchy Bran Cereal",
  "Typical serving size (grams)": "40 grams (1 bowl)",
  "Fiber Per Gram": 0.733,
  "Fiber Per Serving": 29.3,
  "Source": "4"
 },
 {
  "Food Type": "UK cereal brands",
  "Food": "Nestle Cookie Crisp Cereal",
  "Typical serving size (grams)": "40 grams (1 bowl)",
  "Fiber Per Gram": 0.2,
  "Fiber Per Serving": 8,
  "Source": "4"
 },
 {
  "Food Type": "UK cereal brands",
  "Food": "Nestle Shredded Wheat",
  "Typical serving size (grams)": "40 grams (1 bowl)",
  "Fiber Per Gram": 0.138,
  "Fiber Per Serving": 5.5,
  "Source": "1"
 },
 {
  "Food Type": "US cereal brands",
  "Food": "Banana Nut Crunch",
  "Typical serving size (grams)": "40 grams (1 bowl)",
  "Fiber Per Gram": 0.068,
  "Fiber Per Serving": 2.7,
  "Source": "2"
 },
 {
  "Food Type": "US cereal brands",
  "Food": "Kellogg's Bran Bud",
  "Typical serving size (grams)": "40 grams (1 bowl)",
  "Fiber Per Gram": 0.429,
  "Fiber Per Serving": 17.2,
  "Source": "2"
 },
 {
  "Food Type": "US cereal brands",
  "Food": "Cheerios",
  "Typical serving size (grams)": "40 grams (1 bowl)",
  "Fiber Per Gram": 0.107,
  "Fiber Per Serving": 4.3,
  "Source": "2"
 },
 {
  "Food Type": "US cereal brands",
  "Food": "Corn Pop",
  "Typical serving size (grams)": "40 grams (1 bowl)",
  "Fiber Per Gram": 0,
  "Fiber Per Serving": 0,
  "Source": "2"
 },
 {
  "Food Type": "US cereal brands",
  "Food": "Kellogs Cracklin Oat Bran",
  "Typical serving size (grams)": "40 grams (1 bowl)",
  "Fiber Per Gram": 0.1,
  "Fiber Per Serving": 4,
  "Source": "2"
 },
 {
  "Food Type": "US cereal brands",
  "Food": "Cream of Wheat",
  "Typical serving size (grams)": "40 grams (1 bowl)",
  "Fiber Per Gram": 0.034,
  "Fiber Per Serving": 1.4,
  "Source": "2"
 },
 {
  "Food Type": "US cereal brands",
  "Food": "General Mills Fiber One",
  "Typical serving size (grams)": "40 grams (1 bowl)",
  "Fiber Per Gram": 0.433,
  "Fiber Per Serving": 17.3,
  "Source": "2"
 },
 {
  "Food Type": "US cereal brands",
  "Food": "General Mills Honey Nut Cheerios",
  "Typical serving size (grams)": "40 grams (1 bowl)",
  "Fiber Per Gram": 0.054,
  "Fiber Per Serving": 2.2,
  "Source": "2"
 },
 {
  "Food Type": "US cereal brands",
  "Food": "Instant Oatmeal",
  "Typical serving size (grams)": "40 grams (1 bowl)",
  "Fiber Per Gram": 0.107,
  "Fiber Per Serving": 4.3,
  "Source": "2"
 },
 {
  "Food Type": "US cereal brands",
  "Food": "Multi-Grain Cheerios",
  "Typical serving size (grams)": "40 grams (1 bowl)",
  "Fiber Per Gram": 0.1,
  "Fiber Per Serving": 4,
  "Source": "2"
 },
 {
  "Food Type": "US cereal brands",
  "Food": "Quaker Shredded Wheat",
  "Typical serving size (grams)": "40 grams (1 bowl)",
  "Fiber Per Gram": 0.116,
  "Fiber Per Serving": 4.6,
  "Source": "2"
 },
 {
  "Food Type": "US cereal brands",
  "Food": "General Mills Raisin Bran",
  "Typical serving size (grams)": "40 grams (1 bowl)",
  "Fiber Per Gram": 0.051,
  "Fiber Per Serving": 2,
  "Source": "2"
 },
 {
  "Food Type": "US cereal brands",
  "Food": "Kellogg's Raisin Bran",
  "Typical serving size (grams)": "40 grams (1 bowl)",
  "Fiber Per Gram": 0.139,
  "Fiber Per Serving": 5.6,
  "Source": "2"
 },
 {
  "Food Type": "Vegetables",
  "Food": "Artichoke",
  "Typical serving size (grams)": "120 grams (1 artichoke)",
  "Fiber Per Gram": 0.052,
  "Fiber Per Serving": 6.2,
  "Source": "2"
 },
 {
  "Food Type": "Vegetables",
  "Food": "Asparagus",
  "Typical serving size (grams)": "90 grams (4 spears)",
  "Fiber Per Gram": 0.016,
  "Fiber Per Serving": 1.4,
  "Source": "2"
 },
 {
  "Food Type": "Vegetables",
  "Food": "Baked Beans",
  "Typical serving size (grams)": "200 grams (1 tin)",
  "Fiber Per Gram": 0.07,
  "Fiber Per Serving": 14,
  "Source": "2"
 },
 {
  "Food Type": "Vegetables",
  "Food": "Broccoli",
  "Typical serving size (grams)": "85 grams (6 florets)",
  "Fiber Per Gram": 0.027,
  "Fiber Per Serving": 2.3,
  "Source": "2"
 },
 {
  "Food Type": "Vegetables",
  "Food": "Brussels sprouts",
  "Typical serving size (grams)": "78 grams (12 Brussels sprouts)",
  "Fiber Per Gram": 0.027,
  "Fiber Per Serving": 2.1,
  "Source": "2"
 },
 {
  "Food Type": "Vegetables",
  "Food": "Carrot",
  "Typical serving size (grams)": "61 grams (1 carrot)",
  "Fiber Per Gram": 0.033,
  "Fiber Per Serving": 2,
  "Source": "2"
 },
 {
  "Food Type": "Vegetables",
  "Food": "Cauliflower",
  "Typical serving size (grams)": "100 grams (8 florets)",
  "Fiber Per Gram": 0.017,
  "Fiber Per Serving": 1.7,
  "Source": "2"
 },
 {
  "Food Type": "Vegetables",
  "Food": "Celery",
  "Typical serving size (grams)": "40 grams (1 stalk)",
  "Fiber Per Gram": 0.175,
  "Fiber Per Serving": 7,
  "Source": "2"
 },
 {
  "Food Type": "Vegetables",
  "Food": "Sweetcorn",
  "Typical serving size (grams)": "100 grams (1 ear)",
  "Fiber Per Gram": 0.02,
  "Fiber Per Serving": 2,
  "Source": "2"
 },
 {
  "Food Type": "Vegetables",
  "Food": "Cucumber",
  "Typical serving size (grams)": "52 grams (10 slices)",
  "Fiber Per Gram": 0.009,
  "Fiber Per Serving": 0.5,
  "Source": "2"
 },
 {
  "Food Type": "Vegetables",
  "Food": "Eggplant\/Aubergine",
  "Typical serving size (grams)": "150 grams (1\/2 eggplant\/aubergine)",
  "Fiber Per Gram": 0.003,
  "Fiber Per Serving": 0.5,
  "Source": "2"
 },
 {
  "Food Type": "Vegetables",
  "Food": "Green beans",
  "Typical serving size (grams)": "60 grams (20 green beans)",
  "Fiber Per Gram": 0.033,
  "Fiber Per Serving": 2,
  "Source": "2"
 },
 {
  "Food Type": "Vegetables",
  "Food": "Lettuce",
  "Typical serving size (grams)": "47 grams",
  "Fiber Per Gram": 0.011,
  "Fiber Per Serving": 0.5,
  "Source": "2"
 },
 {
  "Food Type": "Vegetables",
  "Food": "Mushrooms",
  "Typical serving size (grams)": "48 grams (3 mushrooms)",
  "Fiber Per Gram": 0.008,
  "Fiber Per Serving": 0.4,
  "Source": "2"
 },
 {
  "Food Type": "Vegetables",
  "Food": "Onion",
  "Typical serving size (grams)": "80 grams (1\/2 an onion)",
  "Fiber Per Gram": 0.013,
  "Fiber Per Serving": 1,
  "Source": "2"
 },
 {
  "Food Type": "Vegetables",
  "Food": "Green peas",
  "Typical serving size (grams)": "80 grams",
  "Fiber Per Gram": 0.05,
  "Fiber Per Serving": 4,
  "Source": "2"
 },
 {
  "Food Type": "Vegetables",
  "Food": "Pinto beans",
  "Typical serving size (grams)": "171 grams",
  "Fiber Per Gram": 0.086,
  "Fiber Per Serving": 14.7,
  "Source": "2"
 },
 {
  "Food Type": "Vegetables",
  "Food": "Baked potato with skin on",
  "Typical serving size (grams)": "175 grams (1 medium baking potato)",
  "Fiber Per Gram": 0.029,
  "Fiber Per Serving": 5.1,
  "Source": "2"
 },
 {
  "Food Type": "Vegetables",
  "Food": "Skinless potato",
  "Typical serving size (grams)": "173 grams (1 medium potato)",
  "Fiber Per Gram": 0.011,
  "Fiber Per Serving": 1.9,
  "Source": "2"
 },
 {
  "Food Type": "Vegetables",
  "Food": "Spinach",
  "Typical serving size (grams)": "15 grams",
  "Fiber Per Gram": 0.053,
  "Fiber Per Serving": 0.8,
  "Source": "2"
 },
 {
  "Food Type": "Vegetables",
  "Food": "Squash",
  "Typical serving size (grams)": "116 grams (1\/2 a squash)",
  "Fiber Per Gram": 0.026,
  "Fiber Per Serving": 3,
  "Source": "2"
 },
 {
  "Food Type": "Vegetables",
  "Food": "Sweet potato with skin on",
  "Typical serving size (grams)": "130 grams (1\/2 a sweet potato)",
  "Fiber Per Gram": 0.023,
  "Fiber Per Serving": 3,
  "Source": "2"
 },
 {
  "Food Type": "Vegetables",
  "Food": "Artichoke",
  "Typical serving size (grams)": "170 grams (1 artichoke heart)",
  "Fiber Per Gram": 0.056,
  "Fiber Per Serving": 9.5,
  "Source": "1"
 },
 {
  "Food Type": "Vegetables",
  "Food": "Fufu",
  "Typical serving size (grams)": "120 grams",
  "Fiber Per Gram": 0.062,
  "Fiber Per Serving": 7.4,
  "Source": "1"
 },
 {
  "Food Type": "Vegetables",
  "Food": "Pumpkin",
  "Typical serving size (grams)": "245 grams",
  "Fiber Per Gram": 0.029,
  "Fiber Per Serving": 7.1,
  "Source": "1"
 },
 {
  "Food Type": "Vegetables",
  "Food": "Taro root",
  "Typical serving size (grams)": "32 grams",
  "Fiber Per Gram": 0.209,
  "Fiber Per Serving": 6.7,
  "Source": "1"
 },
 {
  "Food Type": "Vegetables",
  "Food": "Parsnips",
  "Typical serving size (grams)": "133 grams",
  "Fiber Per Gram": 0.047,
  "Fiber Per Serving": 6.3,
  "Source": "1"
 },
 {
  "Food Type": "Vegetables",
  "Food": "Nettles",
  "Typical serving size (grams)": "90 grams",
  "Fiber Per Gram": 0.068,
  "Fiber Per Serving": 6.1,
  "Source": "1"
 },
 {
  "Food Type": "Vegetables",
  "Food": "Jicama",
  "Typical serving size (grams)": "130 grams",
  "Fiber Per Gram": 0.045,
  "Fiber Per Serving": 5.9,
  "Source": "1"
 },
 {
  "Food Type": "Vegetables",
  "Food": "Winter squash",
  "Typical serving size (grams)": "125 grams (half a squash)",
  "Fiber Per Gram": 0.028,
  "Fiber Per Serving": 3.5,
  "Source": "1"
 },
 {
  "Food Type": "Vegetables",
  "Food": "Yam",
  "Typical serving size (grams)": "136 grams",
  "Fiber Per Gram": 0.039,
  "Fiber Per Serving": 5.3,
  "Source": "1"
 },
 {
  "Food Type": "Vegetables",
  "Food": "Tree fern",
  "Typical serving size (grams)": "57 grams",
  "Fiber Per Gram": 0.091,
  "Fiber Per Serving": 5.2,
  "Source": "1"
 },
 {
  "Food Type": "Vegetables",
  "Food": "Luffa gourd",
  "Typical serving size (grams)": "178 grams",
  "Fiber Per Gram": 0.029,
  "Fiber Per Serving": 5.2,
  "Source": "1"
 },
 {
  "Food Type": "Vegetables",
  "Food": "Turnip greens",
  "Typical serving size (grams)": "144 grams",
  "Fiber Per Gram": 0.035,
  "Fiber Per Serving": 5,
  "Source": "1"
 },
 {
  "Food Type": "Vegetables",
  "Food": "Drumstick pods",
  "Typical serving size (grams)": "118 grams",
  "Fiber Per Gram": 0.073,
  "Fiber Per Serving": 8.6,
  "Source": "1"
 },
 {
  "Food Type": "Vegetables",
  "Food": "Kohlrabi",
  "Typical serving size (grams)": "135 grams",
  "Fiber Per Gram": 0.036,
  "Fiber Per Serving": 4.9,
  "Source": "1"
 },
 {
  "Food Type": "Vegetables",
  "Food": "Collard greens",
  "Typical serving size (grams)": "190 grams",
  "Fiber Per Gram": 0.025,
  "Fiber Per Serving": 4.8,
  "Source": "1"
 },
 {
  "Food Type": "Vegetables",
  "Food": "Kale",
  "Typical serving size (grams)": "130 grams",
  "Fiber Per Gram": 0.036,
  "Fiber Per Serving": 4.7,
  "Source": "1"
 },
 {
  "Food Type": "Vegetables",
  "Food": "Chayote (mirliton)",
  "Typical serving size (grams)": "160 grams",
  "Fiber Per Gram": 0.028,
  "Fiber Per Serving": 4.5,
  "Source": "1"
 },
 {
  "Food Type": "Vegetables",
  "Food": "Escarole",
  "Typical serving size (grams)": "135 grams",
  "Fiber Per Gram": 0.031,
  "Fiber Per Serving": 4.2,
  "Source": "1"
 },
 {
  "Food Type": "Vegetables",
  "Food": "Beet greens",
  "Typical serving size (grams)": "144 grams",
  "Fiber Per Gram": 0.029,
  "Fiber Per Serving": 4.2,
  "Source": "1"
 },
 {
  "Food Type": "Vegetables",
  "Food": "Salsify",
  "Typical serving size (grams)": "133 grams",
  "Fiber Per Gram": 0.032,
  "Fiber Per Serving": 4.3,
  "Source": "1"
 },
 {
  "Food Type": "Vegetables",
  "Food": "Savoy cabbage",
  "Typical serving size (grams)": "100 grams (1\/8th cabbage)",
  "Fiber Per Gram": 0.046,
  "Fiber Per Serving": 4.6,
  "Source": "1"
 },
 {
  "Food Type": "Vegetables",
  "Food": "Red cabbage",
  "Typical serving size (grams)": "156 grams (1\/8th cabbage)",
  "Fiber Per Gram": 0.026,
  "Fiber Per Serving": 4.1,
  "Source": "1"
 },
 {
  "Food Type": "Vegetables",
  "Food": "Edamame",
  "Typical serving size (grams)": "75 grams (30 edamame beans)",
  "Fiber Per Gram": 0.055,
  "Fiber Per Serving": 4.1,
  "Source": "1"
 },
 {
  "Food Type": "Vegetables",
  "Food": "Okra",
  "Typical serving size (grams)": "250 grams (9 okras)",
  "Fiber Per Gram": 0.016,
  "Fiber Per Serving": 4,
  "Source": "1"
 },
 {
  "Food Type": "Vegetables",
  "Food": "Hominy",
  "Typical serving size (grams)": "165 grams",
  "Fiber Per Gram": 0.024,
  "Fiber Per Serving": 4,
  "Source": "1"
 },
 {
  "Food Type": "Vegetables",
  "Food": "Lambsquarters",
  "Typical serving size (grams)": "100 grams",
  "Fiber Per Gram": 0.038,
  "Fiber Per Serving": 3.8,
  "Source": "1"
 },
 {
  "Food Type": "Vegetables",
  "Food": "Lotus root",
  "Typical serving size (grams)": "60 grams",
  "Fiber Per Gram": 0.063,
  "Fiber Per Serving": 3.8,
  "Source": "1"
 },
 {
  "Food Type": "Vegetables",
  "Food": "Swiss chard",
  "Typical serving size (grams)": "175 grams",
  "Fiber Per Gram": 0.021,
  "Fiber Per Serving": 3.7,
  "Source": "1"
 },
 {
  "Food Type": "Vegetables",
  "Food": "Mustard spinach",
  "Typical serving size (grams)": "150 grams",
  "Fiber Per Gram": 0.024,
  "Fiber Per Serving": 3.6,
  "Source": "1"
 },
 {
  "Food Type": "Vegetables",
  "Food": "Hearts of palm",
  "Typical serving size (grams)": "146 grams",
  "Fiber Per Gram": 0.024,
  "Fiber Per Serving": 3.5,
  "Source": "1"
 },
 {
  "Food Type": "Vegetables",
  "Food": "Bamboo shoots",
  "Typical serving size (grams)": "151 grams",
  "Fiber Per Gram": 0.022,
  "Fiber Per Serving": 3.3,
  "Source": "1"
 },
 {
  "Food Type": "Vegetables",
  "Food": "Yardlong beans",
  "Typical serving size (grams)": "104 grams",
  "Fiber Per Gram": 0.032,
  "Fiber Per Serving": 3.3,
  "Source": "1"
 },
 {
  "Food Type": "Vegetables",
  "Food": "Turnip",
  "Typical serving size (grams)": "144 grams (1\/8th of a turnip)",
  "Fiber Per Gram": 0.022,
  "Fiber Per Serving": 3.2,
  "Source": "1"
 },
 {
  "Food Type": "Vegetables",
  "Food": "Red bell pepper",
  "Typical serving size (grams)": "149 grams (1 pepper)",
  "Fiber Per Gram": 0.02,
  "Fiber Per Serving": 3,
  "Source": "1"
 },
 {
  "Food Type": "Vegetables",
  "Food": "Rutabaga",
  "Typical serving size (grams)": "170 grams (1\/2 a rutabaga)",
  "Fiber Per Gram": 0.018,
  "Fiber Per Serving": 3.1,
  "Source": "1"
 },
 {
  "Food Type": "Vegetables",
  "Food": "Plantains",
  "Typical serving size (grams)": "137 grams (1\/2 a plaintain)",
  "Fiber Per Gram": 0.023,
  "Fiber Per Serving": 3.2,
  "Source": "1"
 },
 {
  "Food Type": "Vegetables",
  "Food": "Nopales",
  "Typical serving size (grams)": "150 grams (2 nopales)",
  "Fiber Per Gram": 0.02,
  "Fiber Per Serving": 3,
  "Source": "1"
 },
 {
  "Food Type": "Vegetables",
  "Food": "Dandelion greens",
  "Typical serving size (grams)": "55 grams",
  "Fiber Per Gram": 0.055,
  "Fiber Per Serving": 3,
  "Source": "1"
 },
 {
  "Food Type": "Vegetables",
  "Food": "Cassava",
  "Typical serving size (grams)": "206 grams (1\/2 a casava)",
  "Fiber Per Gram": 0.015,
  "Fiber Per Serving": 3.1,
  "Source": "1"
 },
 {
  "Food Type": "Vegetables",
  "Food": "Taro leaves",
  "Typical serving size (grams)": "145 grams",
  "Fiber Per Gram": 0.02,
  "Fiber Per Serving": 2.9,
  "Source": "1"
 },
 {
  "Food Type": "Vegetables",
  "Food": "Cabbage",
  "Typical serving size (grams)": "200 grams (1\/5th cabbage)",
  "Fiber Per Gram": 0.014,
  "Fiber Per Serving": 2.8,
  "Source": "1"
 },
 {
  "Food Type": "Vegetables",
  "Food": "Mustard greens",
  "Typical serving size (grams)": "140 grams",
  "Fiber Per Gram": 0.02,
  "Fiber Per Serving": 2.8,
  "Source": "1"
 },
 {
  "Food Type": "Vegetables",
  "Food": "Beetroot",
  "Typical serving size (grams)": "236 grams (2 beetroots)",
  "Fiber Per Gram": 0.012,
  "Fiber Per Serving": 2.8,
  "Source": "1"
 },
 {
  "Food Type": "Vegetables",
  "Food": "Celeriac",
  "Typical serving size (grams)": "156 grams (1\/8th celeriac)",
  "Fiber Per Gram": 0.018,
  "Fiber Per Serving": 2.8,
  "Source": "1"
 }
];

  const tableOrder = [
    "Beans, pulses and legumes",
    "Vegetables",
    "Fruit",
    "Nuts and seeds",
    "Grains",
    "Breads",
    "Pasta/Rice",
    "US Cereal brands",
    "UK Cereal Brands"
  ];

 let fiberGoal = 0; // Initialize fiber goal
  let totalFiberConsumed = 0; // Track total fiber consumed

  // Handle setting the fiber goal
  const form = document.getElementById('fiber-goal-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission from reloading the page

    const fiberGoalInput = document.getElementById('fiber-goal');
    const inputGoal = parseFloat(fiberGoalInput.value); // Get the entered fiber goal

    if (isNaN(inputGoal) || inputGoal <= 0) {
      alert('Please enter a valid fiber goal.');
    } else {
      fiberGoal = inputGoal; // Set the fiber goal
      updateRemainingFiber(); // Update the display for remaining fiber
    }
  });

  // Update the remaining fiber display
  function updateRemainingFiber() {
    const remainingFiber = fiberGoal - totalFiberConsumed;
    document.getElementById('remaining-fiber').querySelector('span').textContent = remainingFiber.toFixed(2);

    if (remainingFiber <= 0) {
      alert('Congratulations! You have met your fiber goal.');
    }
  }

  // Dynamically generate food tables
  const foodByType = foodData.reduce((acc, food) => {
    if (!acc[food["Food Type"]]) {
      acc[food["Food Type"]] = [];
    }
    acc[food["Food Type"]].push(food);
    return acc;
  }, {});

  const tablesContainer = document.getElementById('food-tables-container');
  Object.keys(foodByType).forEach((foodType) => {
    const foods = foodByType[foodType];

    // Create section and table
    const section = document.createElement('div');
    section.classList.add('food-section');

    const header = document.createElement('h2');
    header.textContent = foodType;
    section.appendChild(header);

    const table = document.createElement('table');
    table.classList.add('food-tables-container');
    table.innerHTML = `
      <thead>
        <tr>
          <th>Food</th>
          <th>Typical Serving Size (g)</th>
          <th>Fiber Per Serving (g)</th>
          <th>Source</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        ${foods
          .map(
            (food) => `
        <tr>
          <td>${food["Food"]}</td>
          <td>${food["Typical serving size (grams)"]}</td>
          <td>${food["Fiber Per Serving"].toFixed(1)}</td>
          <td>${food["Source"]}</td>
          <td><button class="add-serving" data-fiber="${food["Fiber Per Serving"]}">Add Serving</button></td>
        </tr>
      `
          )
          .join('')}
      </tbody>
    `;
    section.appendChild(table);
    tablesContainer.appendChild(section);
  });

  // Add event listeners to the "Add Serving" buttons
  document.querySelectorAll('.add-serving').forEach((button) => {
    button.addEventListener('click', (event) => {
      if (fiberGoal <= 0) {
        alert('Please set your daily fiber goal before adding foods.');
        return;
      }

      const fiberPerServing = parseFloat(event.target.getAttribute('data-fiber'));
      totalFiberConsumed += fiberPerServing;

      // Update the fiber consumed list
      const foodName =
        event.target.closest('tr').querySelector('td:first-child').textContent;
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        1 portion of ${foodName}
        <button class="remove-serving" data-fiber="${fiberPerServing}">Remove</button>
      `;
      document.getElementById('consumed-list').appendChild(listItem);

      // Add event listener for remove button
      listItem.querySelector('.remove-serving').addEventListener('click', (event) => {
        const fiberRemoved = parseFloat(event.target.getAttribute('data-fiber'));
        totalFiberConsumed -= fiberRemoved;

        // Remove the list item
        event.target.closest('li').remove();
        updateRemainingFiber();
      });

      updateRemainingFiber();
    });
  });
});
