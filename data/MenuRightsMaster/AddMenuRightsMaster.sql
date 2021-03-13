
INSERT INTO [dbo].[MenuRights]
           ([UserId]
           ,[DId]
           ,[MId]
           ,[Ord]
           ,[Remark]
           ,[EntUser]
           ,[EntDate]
           )
     VALUES
           (
			@p_UserId
			,@p_DId
			,@p_MId
			,@p_Ord
			,@p_Remark
			,@p_EntUser
			,GETDATE()
		   )

SELECT SCOPE_IDENTITY() AS Id


