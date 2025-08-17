// 不動産見積もりシミュレーターの内部ロジック

document.addEventListener('DOMContentLoaded', function() {
    const priceInput = document.getElementById('price');
    const buildingAgeInput = document.getElementById('building-age');
    const loanAmountInput = document.getElementById('loan-amount');
    const otherFeesInput = document.getElementById('other-fees');
    const totalResult = document.getElementById('total-result');

    function calculateTotal() {
        const price = parseInt(priceInput.value, 10) || 0;
        const buildingAge = parseInt(buildingAgeInput.value, 10) || 0;
        const loanAmount = parseInt(loanAmountInput.value, 10) || 0;
        const otherFees = parseInt(otherFeesInput.value, 10) || 0;

        // 仮の計算ロジック（例: 物件価格 + その他費用 + ローン借入額の1% + 築年数×1万円）
        const total = price + otherFees + Math.floor(loanAmount * 0.01) + (buildingAge * 1);
        totalResult.textContent = total + '万円';
    }

    priceInput.addEventListener('input', calculateTotal);
    buildingAgeInput.addEventListener('input', calculateTotal);
    loanAmountInput.addEventListener('input', calculateTotal);
    otherFeesInput.addEventListener('input', calculateTotal);

    calculateTotal();
});
