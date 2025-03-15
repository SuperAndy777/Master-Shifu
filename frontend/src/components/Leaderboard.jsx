const Leaderboard = ({ drivers }) => (
    <div>
        <h2>Leaderboard</h2>
        <ul>
            {drivers.map((driver, index) => (
                <li key={driver.id}>
                    <span>{index + 1}. {driver.name}</span>
                    <span>{driver.points} points</span>
                    {driver.tier === 'gold' && <span>🥇</span>}
                    {driver.tier === 'silver' && <span>🥈</span>}
                </li>
            ))}
        </ul>
    </div>
);

export default Leaderboard;
