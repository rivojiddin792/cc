    const screen = document.querySelector('.screen');
    document.querySelectorAll('button').forEach(btn => {
        btn.onclick = () => {
            const val = btn.textContent;

            if (val === '=') {
                try {
                    screen.textContent = eval(screen.textContent);
                } catch {
                    screen.textContent = 'Error';
                }
            } else if (val === 'C') {
                screen.textContent = '';
            } else {
                if (screen.textContent.length < 15) {
                    screen.textContent += val;
                }
            }
        };
    });
