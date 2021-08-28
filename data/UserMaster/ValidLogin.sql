SELECT [Id]
      ,[RefId]
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
      ,[ConfirmFlag]
      ,[ConfirmUser]
      ,CONVERT(varchar,[ConfirmDate],105) as ConfirmDate
      ,[DId]
      ,[PId]
     -- ,[Password]
  FROM [dbo].[UserMaster]
WHERE [UserName] = @p_UserName
  and [Password] = @p_Password

SELECT SCOPE_IDENTITY() AS USERID
