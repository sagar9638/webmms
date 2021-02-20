SELECT [Id]
      ,[RefId]
      ,[Name]
      ,[City]
      ,CONVERT(varchar,[DOB],105) as DOB
      ,[MobileNo]
      ,[EmailId]
      ,[EntUser]
      ,CONVERT(varchar,[EntDate],105) as EntDate
      ,[UpdUser]
      ,[UpdDate]
      ,[TimeStamp]
      ,[UserName]
      ,[Password]
  FROM [dbo].[UserMaster]


