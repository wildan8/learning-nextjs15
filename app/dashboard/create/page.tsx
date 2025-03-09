
import { handleSubmission } from "@/app/actions";
import { SubmitButton } from "@/components/general/submitButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function CreatePage() {
    return (
        <Card className="max-w-lg mx-auto">
            <CardHeader>
                <CardTitle>Create Post</CardTitle>
                <CardDescription>
                    Create new Post Here
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form className="flex flex-col gap-4" action={handleSubmission}>
                    <div className="flex flex-col gap-2">
                        <Label>Title</Label>
                        <Input name="title" required type="text" placeholder="Title here ..."></Input>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                        <Label>Content</Label>
                        <Textarea name="content" required placeholder="Content Here ..."></Textarea>
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label>Image URL</Label>
                        <Input name="url" required type="url" placeholder="Add Image ..."></Input>
                    </div>
                    <SubmitButton/>
                </form>
            </CardContent>
        </Card>
    );
}