UPDATE [dbo].[EventMaster]
   SET [ECategory] = @p_ECategory
      ,[EStatus] = @p_EStatus
      ,[EName] = @p_EName
      ,[EVenue] = @p_EVenue
      ,[EDetail] = @p_EDetail
      ,[EUrl] = @p_EUrl
      ,[EImagePath] = @p_EImagePath
      ,[EDate] = @p_EDate
      ,[ETime] = @p_ETime
      ,[IsActive] = @p_IsActive
      ,[Ord] = @p_Ord
      ,[Remark] = @p_Remark
      ,[UpdDate] = GETDATE()
      ,[UpdUser] = @p_UpdUser
      ,[EDisplayFlag] = @p_EDisplayFlag
 WHERE [Id] = @p_Id

 SELECT SCOPE_IDENTITY() AS Id
