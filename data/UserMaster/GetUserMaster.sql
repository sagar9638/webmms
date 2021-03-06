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
      ,(select d.DName from DesignationMaster d where d.DId = U.DId) as DName
      ,[ConnectUserCount] 
      ,[ConfirmStatusId]
      ,[UserProfileUrl]
      ,[UserProtfilePath]
      ,[CDoing]
      ,[Dream]
      ,[PId]
  FROM [dbo].[UserMaster] U Where 1=1 ' + @p_Condition

  EXEC sp_executesql @Query

