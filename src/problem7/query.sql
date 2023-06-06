SELECT b.address
FROM balances b
JOIN trades t ON b.address = t.address
WHERE t.block_height > 730000
GROUP BY b.address
HAVING SUM(
    CASE
        WHEN b.denom = 'usdc' THEN b.amount * 0.000001
        WHEN b.denom = 'swth' THEN b.amount * 0.00000005
        WHEN b.denom = 'tmz' THEN b.amount * 0.003
    END
) >= 500;