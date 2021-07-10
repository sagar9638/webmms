
DECLARE @Query NVARCHAR(MAX);

SET @Query = ' SELECT *,
					  CONVERT(varchar,[EntDate],105) as EntDates
				 FROM [dbo].[NewsMaster]
				WHERE 1 = 1 ' + @p_Condition

  EXEC sp_executesql @Query

