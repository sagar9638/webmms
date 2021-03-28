-- SELECT [Id]
--       ,[RefId]
--       ,[Name]
--       ,[City]
--       ,CONVERT(varchar,[DOB],105) as DOB
--       ,[MobileNo]
--       ,[EmailId]
--       ,[EntUser]
--       ,CONVERT(varchar,[EntDate],105) as EntDate
--       ,[UpdUser]
--       ,[UpdDate]
--       ,[TimeStamp]
--       ,[UserName]
--       ,[Password]
--       ,[ConfirmFlag]
--       ,[ConfirmUser]
--       ,CONVERT(varchar,[ConfirmDate],105) as ConfirmDate
--   FROM [dbo].[UserMaster]

DECLARE @Query NVARCHAR(MAX);

SET @Query = '
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
      ,[ConfirmFlag]
      ,[ConfirmUser]
      ,CONVERT(varchar,[ConfirmDate],105) as ConfirmDate
      ,[DId]
      ,[ConnectUserCount] 
      ,[ConfirmStatusId]
      ,[UserProfileUrl]
      ,[UserProtfilePath]
  FROM [dbo].[UserMaster] Where 1=1 ' + @p_Condition

  EXEC sp_executesql @Query

