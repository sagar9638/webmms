
UPDATE [dbo].[NewsMaster]
   SET [Title] = @p_Title
      ,[SubTitle] = @p_SubTitle
      ,[Image] = @p_Image
      ,[Description] = @p_Description
      ,[Ord] = @p_Ord
      ,[IsActive] = @p_IsActive
      ,[UpdDate] = GETDATE()
      ,[UpdUser] = @p_UpdUser
 WHERE [Id] = @p_Id

 SELECT SCOPE_IDENTITY() AS NId



