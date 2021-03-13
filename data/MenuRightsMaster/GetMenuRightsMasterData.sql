
DECLARE @Query NVARCHAR(MAX);

SET @Query = ' SELECT * 
				 FROM [dbo].[MenuRights]
				WHERE 1 = 1 ' + @p_Condition

  EXEC sp_executesql @Query
