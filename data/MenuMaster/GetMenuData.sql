
DECLARE @Query NVARCHAR(MAX);

SET @Query = ' SELECT * 
				 FROM [dbo].[MenuMaster]
				WHERE 1 = 1 ' + @p_Condition

  EXEC sp_executesql @Query

