UPDATE [dbo].[UserMaster]
   SET [Name] = @p_Name
      ,[City] = @p_City
      ,[MobileNo] = @p_MobileNo
      ,[EmailId] = @p_EmailId
      ,[UserProfileUrl] = @p_UserProfileUrl
      ,[UserProtfilePath] = @p_UserProtfilePath
 WHERE [Id] = @p_Id



