DECLARE @Query NVARCHAR(MAX);

SET @Query = ' 
				SELECT [Id]
					  ,[DId]
					  ,[MId]
					  ,[EntUser]
					  ,[EntDate]
					  ,[UpdUser]
					  ,[UpdDate]
					  ,[TimeStamp]
				  FROM [dbo].[DesignationDetail]
				WHERE 1 = 1 ' + @p_Condition

  EXEC sp_executesql @Query



