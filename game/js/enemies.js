export const enemies = [];
const SIZE = 26;

function pushEnemies(canvas) {
    const w = SIZE;
    const h = SIZE;
    const x = Math.random() * (canvas.width - w);
    const y = 0;
    const vy = 5

    enemies.push({ x, y, width: w, height: h, vy });
}

export function spawnEnemy(canvas) {
    if (enemies.length < 5) {
        pushEnemies(canvas);
    }
}
