
UPDATE [dbo].[MenuRights]
   SET [UserId] = @p_UserId
      ,[DId] = @p_DId
      ,[MId] = @p_MId
      ,[PId] = @p_PId
      ,[Ord] = @p_Ord
      ,[Remark] = @p_Remark
      ,[UpdUser] = @p_UpdUser
      ,[UpdDate] = GETDATE()
 WHERE [Id] = @p_Id

 SELECT SCOPE_IDENTITY() AS Id


