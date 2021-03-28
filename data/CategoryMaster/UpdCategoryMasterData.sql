UPDATE [dbo].[CategoryMaster]
   SET [CName] = @p_CName
      ,[CShortName] = @p_CShortName
      ,[CType] = @p_CType
      ,[CPageName] = @p_CPageName
      ,[CPageType] = @p_CPageType
      ,[CDetail] = @p_CDetail
      ,[CStatusFlag] = @p_CStatusFlag
      ,[CConfirmFlag] = @p_CConfirmFlag
      ,[IsActive] = @p_IsActive
      ,[Ord] = @p_Ord
      ,[Remark] = @p_Remark
      ,[UpdDate] = GETDATE()
      ,[UpdUser] = @p_UpdUser
 WHERE [Id] = @p_Id

 SELECT SCOPE_IDENTITY() AS Id


