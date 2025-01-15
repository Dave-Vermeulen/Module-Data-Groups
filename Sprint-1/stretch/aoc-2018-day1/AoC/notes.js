const calculateDifference = (array1, array2) => {
    return array1.reduce((acc, val, idx) => acc + Math.abs(val - array2[idx]), 0);
};
// Convert the dataset into arrays
const dataset = [
    [39687, 54930],
    [86219, 31559],
    [48536, 73145],
    // [19932, 82178],
    // [87646, 97411],
    // [18305, 78515],
    // [60437, 30432],
    // [35451, 49981],
    // [93478, 61402],
    // [19754, 38933],
    // [85455, 20590],
    // [82836, 14896],
    // [55217, 89552],
    // [11698, 99229],
    // [93753, 84187],
    // [93422, 97415],
    // [57366, 97415],
    // [97937, 74337],
    // [49478, 74337],
    // [14644, 38161],
    // [19399, 13589],
    // [74271, 80973],
    // [30811, 43748],
    // [39084, 14139],
    // [50012, 35681],
    // [26833, 68646],
    // [85916, 94351],
    // [48783, 65976],
    // [60349, 37405],
    // [48397, 24524],
    // [12784, 96876],
    // [26511, 32005],
    // [25828, 50973],
    // [41783, 18470],
    // [86788, 84403],
    // [52646, 85455],
    // [47960, 55292],
    // [33628, 88834],
    // [60975, 32865],
    // [18734, 34272],
    // [97411, 13386],
    // [98587, 32005],
    // [13899, 55558],
    // [83942, 39621],
    // [27222, 72250],
    // [92406, 40726],
    // [58334, 43748],
    // [57066, 38522],
    // [39164, 54930],
    // [41041, 87903],
    // [53063, 31354],
    // [41396, 72724],
    // [95245, 79046],
    // [83977, 29994],
    // [23525, 23626],
    // [28481, 78774],
    // [57089, 88281],
    // [95507, 89601],
    // [14606, 37413],
    // [83403, 69108],
    // [20870, 65520],
    // [52065, 31711],
    // [10688, 43748],
    // [14754, 74862],
    // [58940, 92984],
    // [34160, 79046],
    // [40229, 15374],
    // [19557, 39621],
    // [76326, 14606],
    // [18064, 99891],
    // [50829, 29383],
    // [24524, 85455],
    // [45230, 19089],
    // [89022, 79046],
    // [66250, 51691],
    // [90805, 65372],
    // [56019, 50673],
    // [67451, 12866],
    // [76068, 65372],
    // [77238, 83243],
    // [93710, 65976],
    // [79065, 73391],
    // [24363, 74337],
    // [29740, 32931],
    // [87834, 79002],
    // [30513, 20720],
    // [15378, 30432],
    // [13130, 97438],
    // [66810, 70609],
    // [98441, 68294],
    // [83594, 50359],
    // [43148, 83382],
    // [25005, 37240],
    // [98638, 65372],
    // [78319, 50811],
    // [90823, 58614],
    // [16089, 93976],
    // [14911, 13087],
    // [60443, 12156],
    // [94516, 50973],
    // [91753, 26787],
    // [15992, 37046],
    // [79270, 50973],
    // [67191, 65372],
    // [32268, 35681],
    // [41819, 54930],
    // [41351, 69285],
    // [44832, 11020],
    // [72750, 91217],
    // [34941, 23646],
    // [65976, 65070],
    // [56038, 47570],
    // [28753, 81142],
    // [63264, 23646],
    // [26145, 88981],
    // [71576, 17123],
    // [97331, 79046],
    // [22775, 79740],
    // [85844, 94770],
    // [25823, 10501],
    // [34176, 91199],
    // [45060, 20266],
    // [31332, 25957],
    // [32455, 16146],
    // [87120, 19937],
    // [73733, 97415],
    // [37954, 51285],
    // [28922, 96517],
    // [39972, 32931],
    // [30973, 99605],
    // [86546, 62291],
    // [80526, 69673],
    // [86070, 73161],
    // [55954, 30432],
    // [37437, 34788],
    // [63111, 97415],
    // [96362, 88981],
    // [75508, 30398],
    // [69428, 81796],
    // [28796, 20675],
    // [57288, 32931],
    // [73193, 42247],
    // [25130, 51213],
    // [38097, 15664],
    // [98834, 26533],
    // [32103, 60744],
    // [68331, 13196],
    // [22986, 65372],
    // [28918, 65976],
    // [27607, 43147],
    // [98022, 83243],
    // [39035, 20720],
    // [62361, 42612],
    // [78321, 83243],
    // [62399, 15803],
    // [84309, 20526],
    // [42350, 39621],
    // [51744, 22556],
    // [58919, 92305],
    // [37337, 88981],
    // [47722, 83460],
    // [29319, 91248],
    // [69603, 85455],
    // [56191, 19231],
    // [62286, 73859],
    // [28227, 18100],
    // [36024, 83100],
    // [60918, 32611],
    // [23022, 88981],
    // [38410, 13292],
    // [29383, 92881],
    // [18625, 84889],
    // [25141, 26391],
    // [69831, 15803],
    // [56740, 18537],
    // [26869, 48559],
    // [60352, 24016],
    // [45390, 32931],
    // [45676, 55292],
    // [69684, 51183],
    // [20234, 15201],
    // [58742, 39621],
    // [99779, 17566],
    // [61992, 70009],
    // [52853, 15896],
    // [46535, 20590],
    // [81327, 20620],
    // [75451, 65976],
    // [25891, 91886],
    // [78175, 46303],
    // [33500, 61400],
    // [78157, 29280],
    // [51091, 31645],
    // [73117, 43748],
    // [66382, 70259],
    // [59120, 20590],
    // [48683, 38424],
    // [21096, 58463],
    // [81257, 48491],
    // [30677, 65122],
    // [70554, 61053],
    // [12626, 43309],
    // [13513, 74337],
    // [71553, 39621],
    // [53798, 20720],
    // [48705, 20590],
    // [46863, 35681],
    // [90815, 71503],
    // [15964, 69448],
    // [68964, 19189],
    // [76668, 55292],
    // [64426, 98722],
    // [29505, 73351],
    // [33746, 29460],
    // [10038, 84187],
    // [48123, 58056],
    // [77274, 43748],
    // [29578, 68732],
    // [55816, 65976],
    // [18618, 43748],
    // [62734, 31263],
    // [30344, 85245],
    // [95314, 68929],
    // [48011, 11057],
    // [98681, 43748],
    // [68950, 21634],
    // [99918, 51415],
    // [47334, 71324],
    // [83782, 45718],
    // [42827, 31502],
    // [62631, 51691]
];

const array1 = dataset.map(pair => pair[0]);
const array2 = dataset.map(pair => pair[1]);

// Execute function
const result = calculateDifference(array1, array2);
console.log("Total Difference:", result);


module.exports = calculateDifference;