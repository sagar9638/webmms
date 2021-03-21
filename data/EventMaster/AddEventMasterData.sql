INSERT INTO [dbo].[EventMaster]
           (
		    [ECategory]
           ,[EStatus]
           ,[EName]
           ,[EVenue]
           ,[EDetail]
           ,[EUrl]
           ,[EImagePath]
           ,[EDate]
           ,[ETime]
           ,[IsActive]
           ,[Ord]
           ,[Remark]
           ,[EntDate]
           ,[EntUser]
           ,[EDisplayFlag]
		   )
     VALUES
           (
		    @p_ECategory
           ,@p_EStatus
           ,@p_EName
           ,@p_EVenue
           ,@p_EDetail
           ,@p_EUrl
           ,@p_EImagePath
           ,@p_EDate
           ,@p_ETime
           ,@p_IsActive
           ,@p_Ord
           ,@p_Remark
           ,GETDATE()
           ,@p_EntUser
           ,@p_EDisplayFlag
		   )


