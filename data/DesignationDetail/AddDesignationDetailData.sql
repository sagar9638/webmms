INSERT INTO [dbo].[DesignationDetail]
           (
			[DId]
           ,[MId]
           ,[EntUser]
           ,[EntDate]
           )
     VALUES
           (
			@p_DId
           ,@p_MId
           ,@p_EntUser
           ,GETDATE()
           )


