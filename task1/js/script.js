document.addEventListener('DOMContentLoaded', () => {
    const DEFAULT_WEIGHT = 30;
    const DEFAULT_HEIGHT = 120;
    const INPUT_WEIGHT = document.getElementById('weight');
    const INPUT_HEIGHT = document.getElementById('height');
    let weightValue = DEFAULT_WEIGHT;
    let heightValue = DEFAULT_HEIGHT;
    const LABEL_WEIGHT = document.querySelector('label[for="weight"]');
    const LABEL_HEIGHT = document.querySelector('label[for="height"]');
    const OUTPUT = document.querySelector('.bmi-caltulcator__output');

    function calculateOutput() {
        let output = (weightValue / ((heightValue / 100) * (heightValue / 100))).toFixed(1);
        console.log(output);
        OUTPUT.innerHTML = `${output}`;
    }
    
    calculateOutput();

    LABEL_WEIGHT.innerHTML = `Weight: ${weightValue} kg`;
    LABEL_HEIGHT.innerHTML = `Height: ${heightValue} cm`;

    INPUT_WEIGHT.addEventListener('input', function() {
        weightValue = this.value;
        LABEL_WEIGHT.innerHTML = `Weight: ${weightValue} kg`;
        calculateOutput();
    });

    INPUT_HEIGHT.addEventListener('input', function() {
        heightValue = this.value;
        LABEL_HEIGHT.innerHTML = `Height: ${heightValue} cm`;
        calculateOutput();
    });
});