DECLARE @Query NVARCHAR(MAX);

SET @Query = '
				SELECT * 
				  FROM (
						SELECT  ISNULL(LAG(t.DName) OVER (ORDER BY t.Ord desc),'') NextDName
							   ,ISNULL(LAG(t.DId) OVER (ORDER BY t.Ord desc),-1) NextDId
							   ,ISNULL(LAG(t.DAchiveCount) OVER (ORDER BY t.Ord desc),-1) NextAchiveCount
							   ,t.DName CurrDName
							   ,t.DId CurrDId
							   ,t.DAchiveCount CurrAchiveCount
							   ,ISNULL(LEAD(t.DName) OVER (ORDER BY t.Ord desc),'') PreDName 
							   ,ISNULL(LEAD(t.DId) OVER (ORDER BY t.Ord desc),-1) PreDId
							   ,ISNULL(LEAD(t.DAchiveCount) OVER (ORDER BY t.Ord desc),-1) PreAchiveCount
						FROM DesignationMaster t
					   ) AS Designation
				 WHERE 1 = 1 '+ @p_Condition;  --CurrDId = 2

EXEC sp_executesql @Query 