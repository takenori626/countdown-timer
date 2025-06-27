let countdownInterval;

function startCountdown() {
    clearInterval(countdownInterval);//既存のタイマーを止める

    const datetimeInput = document.getElementById(`datetime`).value;
    const targetTime = new Date(datetimeInput).getTime();

    if(isNaN(targetTime)) {
        document.getElementById(`countdown`).textContent = "正しい日付を入力してください";
        return;
    }
    countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetTime - now;

        if (distance < 0) {
            clearInterval(countdownInterval)
            document
        }
    })








}


