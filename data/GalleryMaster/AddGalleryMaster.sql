
INSERT INTO [dbo].[GalleryMaster]
           ([FileName]
           ,[FileType]
           ,[FileSize]
           ,[Path]
           ,[SrcPath]
           ,[PageName]
           ,[PageType]
           ,[Category]
           ,[Ord]
           ,[Remark]
           ,[DeleteFlag]
           ,[EntDate]
           ,[EntUser]
           )
     VALUES
           (
		     @p_FileName
			,@p_FileType
			,@p_FileSize
			,@p_Path
                  ,@p_SrcPath
                  ,@p_PageName
                  ,@p_PageType
			,@p_Category
			,@p_Ord
			,@p_Remark
			,'Y'
			,GETDATE()
			,@p_EntUser
		)

SELECT SCOPE_IDENTITY() AS Id
