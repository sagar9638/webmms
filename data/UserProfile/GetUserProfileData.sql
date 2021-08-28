DECLARE @Query NVARCHAR(MAX);

SET @Query = '
				SELECT [Id]
					  ,[RefId]
					  ,[DId] CurrentDId
					  ,(SELECT DName   FROM DesignationMaster D WHERE D.DId = A.[DId]) AS CurrentDName
					  ,PerentId
					  ,(SELECT Name FROM UserMaster WHERE CAST(RefId AS nvarchar) = PerentId) AS PerentName
					  ,[ConnectUserCount]
					  ,[ConfirmFlag]
					  ,[ConfirmUser]
					  ,[ConfirmDate]
					  ,[Name]
					  ,[City]
					  ,[DOB]
					  ,[MobileNo]
					  ,[EmailId]
					  ,[EntUser]
					  ,[EntDate]
					  ,[UpdUser]
					  ,[UpdDate]
					  ,[TimeStamp]
					  ,[UserName]
					  ,[Remark]
					  ,[DId]
					  ,[ConnectUserCount]
					  ,[ConfirmStatusId]
					  ,[UserProfileUrl]
					  ,[UserProtfilePath]
					  ,[CDoing]
					  ,[Dream]
				FROM   (
						SELECT LEFT(RefId, LEN(RefId) - CHARINDEX(''.'', REVERSE(RefId))) PerentId,*  
						  FROM [dbo].[UserMaster]
	   				   ) AS A
				WHERE   1 = 1 ' +  @p_Condition

EXEC sp_executesql @Query
