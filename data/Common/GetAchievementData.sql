DECLARE @Query NVARCHAR(MAX);

SET @Query = '
SELECT  (SELECT DD.DName FROM DesignationMaster DD WHERE DD.DId = U.DId) AS DesignationName 
		,COUNT(*) AS AchievementCount  
   FROM UserMaster U 
GROUP BY U.DId';


EXEC sp_executesql @Query
			  