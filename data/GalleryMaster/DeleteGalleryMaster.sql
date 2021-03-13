UPDATE [dbo].[GalleryMaster]
   SET [DeleteFlag] = 'N'
      ,[UpdDate] = GETDATE()
      ,[UpdUser] = @p_UpdUser
 WHERE [Id] = @p_Id

 SELECT SCOPE_IDENTITY() AS Id


