DECLARE @Query NVARCHAR(MAX);

SET @Query = '
			SELECT MM.*
			  FROM MenuRights MR,MenuMaster MM
			 WHERE MR.MId = MM.MId
			   AND MM.IsActive = ''Y'' 
			   ' +  @p_Condition --AND MR.DId = 3

EXEC sp_executesql @Query
			   